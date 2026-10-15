"use client";

export function BeaconBadge({
  text,
  status = "available",
  className = "",
  pulseColor = "#10b981", // green default
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/40 px-3.5 py-1 text-xs font-mono tracking-wide text-foreground backdrop-blur-md select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: pulseColor }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: pulseColor }}
        />
      </span>
      <span>{text}</span>
    </div>
  );
}
