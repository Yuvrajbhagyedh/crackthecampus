"use client";

import { useEffect, useState } from "react";
import { AUTH_EVENT, getSession, type Session } from "./auth";

/**
 * Subscribes to the mock session in localStorage. Stays in sync across the app
 * via the AUTH_EVENT dispatched on login/logout, and across tabs via `storage`.
 * Returns `undefined` until mounted to avoid a hydration mismatch.
 */
export function useSession() {
  const [session, setSessionState] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    const sync = () => setSessionState(getSession());
    sync();
    window.addEventListener(AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return session;
}
