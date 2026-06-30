/**
 * Mock, client-only auth for the demo. There is no backend, so accounts and the
 * active session live in localStorage and "sign in" simply verifies the stored
 * record. This is intentionally NOT production auth — it exists to make the
 * login / register flows feel real for the landing-page demo.
 */

export type Account = { name: string; email: string; password: string };
export type Session = { name: string; email: string };

const ACCOUNTS_KEY = "ctc-accounts";
const SESSION_KEY = "ctc-session";
export const AUTH_EVENT = "ctc-auth-change";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function notify() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
}

export function getSession(): Session | null {
  return read<Session | null>(SESSION_KEY, null);
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
  notify();
}

function setSession(session: Session) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  notify();
}

function getAccounts(): Account[] {
  return read<Account[]>(ACCOUNTS_KEY, []);
}

export function registerAccount(input: Account): Session {
  const accounts = getAccounts();
  if (accounts.some((a) => a.email.toLowerCase() === input.email.toLowerCase())) {
    throw new Error("An account with this email already exists.");
  }
  accounts.push(input);
  window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  const session = { name: input.name, email: input.email };
  setSession(session);
  return session;
}

export function loginWithPassword(email: string, password: string): Session {
  const account = getAccounts().find(
    (a) => a.email.toLowerCase() === email.toLowerCase(),
  );
  if (!account) {
    throw new Error("No account found for this email. Create one first.");
  }
  if (account.password !== password) {
    throw new Error("Incorrect password. Please try again.");
  }
  const session = { name: account.name, email: account.email };
  setSession(session);
  return session;
}

// Shared field validators reused by both forms.
export const validators = {
  name: (v: string) =>
    v.trim().length < 2 ? "Please enter your full name." : "",
  email: (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address.",
  password: (v: string) =>
    v.length < 8 ? "Password must be at least 8 characters." : "",
};
