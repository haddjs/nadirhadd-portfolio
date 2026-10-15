"use client";

import Link from "next/link";

export default function EnterButton({
  href,
  label = "View project",
  className = "",
  accentColor = "#3959f9",
  onNavigate,
  disabled = false,
}) {
  const sharedClassName = `group relative inline-flex items-center gap-3 select-none ${
    disabled ? "pointer-events-none opacity-60" : ""
  } ${className}`;

  const content = (
    <span className="relative flex items-center justify-between gap-4 rounded-full border border-current px-5 py-2.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md transition-all duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-black group-hover:shadow-lg">
      <span>{label}</span>

      <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.68,0,0.1,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </span>
  );

  if (onNavigate) {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={(event) => {
          if (disabled) return;
          onNavigate(event);
        }}
        className={sharedClassName}
        aria-label={label}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={sharedClassName} aria-label={label}>
      {content}
    </Link>
  );
}
