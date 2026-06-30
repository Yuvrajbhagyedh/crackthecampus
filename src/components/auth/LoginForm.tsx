"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { loginWithPassword, validators } from "@/lib/auth";
import { Icon } from "@/components/ui/Icon";
import { AuthField } from "./AuthField";
import { SubmitButton } from "./SubmitButton";

type Errors = { email?: string; password?: string };

export function LoginForm() {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [hint, setHint] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
    setFormError("");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {
      email: validators.email(values.email) || undefined,
      password: values.password ? undefined : "Enter your password.",
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    setLoading(true);
    setFormError("");
    // Simulate a network round-trip for a realistic feel.
    await new Promise((r) => setTimeout(r, 800));
    try {
      loginWithPassword(values.email, values.password);
      router.push("/");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        Welcome back
      </h1>
      <p className="mt-2 text-sm text-muted">
        Log in to continue your placement prep.
      </p>

      {formError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="mt-6 flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-3.5 py-2.5 text-sm font-medium text-red-600 dark:text-red-400"
        >
          <Icon name="shield" size={16} className="shrink-0" />
          {formError}
        </motion.p>
      )}

      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
        <AuthField
          label="Email"
          icon="mail"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <AuthField
          label="Password"
          icon="lock"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={values.password}
          onChange={(e) => update("password", e.target.value)}
          error={errors.password}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[rgb(var(--border))] accent-brand-600"
            />
            Remember me
          </label>
          <button
            type="button"
            onClick={() => setHint((h) => !h)}
            className="font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
          >
            Forgot password?
          </button>
        </div>

        {hint && (
          <p className="rounded-lg bg-brand-500/10 px-3 py-2 text-xs text-brand-700 dark:text-brand-200">
            This is a demo — sign in with the password you set when registering.
          </p>
        )}

        <SubmitButton loading={loading}>
          {loading ? "Signing in…" : "Log in"}
        </SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        New to CrackTheCampus?{" "}
        <Link
          href="/register"
          className="font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
