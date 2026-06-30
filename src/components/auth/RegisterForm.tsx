"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { registerAccount, validators } from "@/lib/auth";
import { Icon } from "@/components/ui/Icon";
import { AuthField } from "./AuthField";
import { SubmitButton } from "./SubmitButton";

type Errors = Partial<Record<"name" | "email" | "password" | "confirm" | "terms", string>>;

export function RegisterForm() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
    setFormError("");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {
      name: validators.name(values.name) || undefined,
      email: validators.email(values.email) || undefined,
      password: validators.password(values.password) || undefined,
      confirm:
        values.confirm !== values.password ? "Passwords do not match." : undefined,
      terms: terms ? undefined : "Please accept the terms to continue.",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setLoading(true);
    setFormError("");
    await new Promise((r) => setTimeout(r, 900));
    try {
      registerAccount({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password,
      });
      router.push("/");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        Create your account
      </h1>
      <p className="mt-2 text-sm text-muted">
        Start preparing free — no credit card required.
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
          label="Full name"
          icon="user"
          autoComplete="name"
          placeholder="Aarav Sharma"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />
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
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={(e) => update("password", e.target.value)}
          error={errors.password}
        />
        <AuthField
          label="Confirm password"
          icon="lock"
          type="password"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={values.confirm}
          onChange={(e) => update("confirm", e.target.value)}
          error={errors.confirm}
        />

        <div>
          <label className="flex items-start gap-2.5 text-sm text-muted">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => {
                setTerms(e.target.checked);
                setErrors((er) => ({ ...er, terms: undefined }));
              }}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-[rgb(var(--border))] accent-brand-600"
            />
            <span>
              I agree to the{" "}
              <span className="font-medium text-brand-600 dark:text-brand-300">
                Terms
              </span>{" "}
              and{" "}
              <span className="font-medium text-brand-600 dark:text-brand-300">
                Privacy Policy
              </span>
              .
            </span>
          </label>
          {errors.terms ? (
            <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {errors.terms}
            </p>
          ) : null}
        </div>

        <SubmitButton loading={loading}>
          {loading ? "Creating account…" : "Create account"}
        </SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
