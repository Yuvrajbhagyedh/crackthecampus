"use client";

import { useId, useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: IconName;
  error?: string;
};

export function AuthField({
  label,
  icon,
  error,
  type = "text",
  className,
  ...props
}: AuthFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && show ? "text" : type;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[rgb(var(--fg))]">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3.5 grid place-items-center text-muted">
          <Icon name={icon} size={18} />
        </span>
        <input
          id={id}
          type={inputType}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full rounded-xl border bg-[rgb(var(--bg))] py-2.5 pl-11 text-sm text-[rgb(var(--fg))] transition-colors placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60",
            isPassword ? "pr-11" : "pr-3.5",
            error
              ? "border-red-400 focus-visible:ring-red-400/50"
              : "border-[rgb(var(--border))] focus-visible:border-brand-400",
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-2.5 grid w-8 place-items-center rounded-md text-muted transition-colors hover:text-[rgb(var(--fg))]"
          >
            <Icon name={show ? "eye-off" : "eye"} size={18} />
          </button>
        )}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
