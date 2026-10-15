"use client";

import Link from "next/link";

export function RollingText({ text, className = "" }) {
  const characters = Array.from(text);

  return (
    <span
      className={`group relative inline-flex overflow-hidden whitespace-pre font-medium ${className}`}
    >
      {/* Primary Row (Slides UP and Out) */}
      <span className="inline-flex" aria-hidden="true">
        {characters.map((char, index) => (
          <span
            key={`top-${index}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full"
            style={{ transitionDelay: `${index * 25}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Duplicate Row (Slides UP from Bottom into View) */}
      <span className="absolute inset-0 inline-flex" aria-hidden="true">
        {characters.map((char, index) => (
          <span
            key={`bottom-${index}`}
            className="inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0"
            style={{ transitionDelay: `${index * 25}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Screen reader accessible fallback */}
      <span className="sr-only">{text}</span>
    </span>
  );
}

// Staggered Character Component
export function StaggerChars({ text, className = "" }) {
  return (
    <span
      className={`inline-flex overflow-hidden whitespace-pre ${className}`}
      aria-hidden="true"
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
          style={{ transitionDelay: `${i * 18}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

// Unified Link Component
export function StaggerHoverLink({
  href,
  children,
  external = false,
  className = "",
  ...props
}) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");
  const sharedClass = `inline-flex items-center ${className}`;
  const label = typeof children === "string" ? children : null;

  const content = label ? <RollingText text={label} /> : children;

  if (isExternal) {
    return (
      <a
        href={href}
        className={sharedClass}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClass} {...props}>
      {content}
    </Link>
  );
}

export function StaggerHoverButton({
  children,
  className = "",
  type = "button",
  ...props
}) {
  const label = typeof children === "string" ? children : null;

  return (
    <button
      type={type}
      className={`inline-flex items-center ${className}`}
      {...props}
    >
      {label ? <RollingText text={label} /> : children}
    </button>
  );
}
