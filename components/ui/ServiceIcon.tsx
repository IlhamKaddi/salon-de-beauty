import type { Service } from "@/lib/data";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<Service["icon"], JSX.Element> = {
  bridal: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <path d="M24 8c-3 0-5 2.4-5 5.2 0 2 1.2 3.4 2.4 4.6C16.6 20 12 25 12 33c0 3.8 5.4 7 12 7s12-3.2 12-7c0-8-4.6-13-9.4-15.2 1.2-1.2 2.4-2.6 2.4-4.6 0-2.8-2-5.2-5-5.2Z" />
      <path d="M15 30c3-2 6-3 9-3s6 1 9 3" />
    </svg>
  ),
  party: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <path d="M24 6v4M12 12l3 3M36 12l-3 3M8 24h4M36 24h4" />
      <circle cx="24" cy="24" r="9" />
      <path d="M24 19v10M19 24h10" />
    </svg>
  ),
  engagement: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <path d="M24 12l6 8-6 18-6-18 6-8Z" />
      <path d="M18 20h12M15 16l3-4h12l3 4" />
    </svg>
  ),
  photoshoot: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <rect x="7" y="15" width="34" height="22" rx="3" />
      <circle cx="24" cy="26" r="6.5" />
      <path d="M18 15l2.5-4h7l2.5 4" />
    </svg>
  ),
  lips: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <path d="M13 20c3-3 7-4 11-4s8 1 11 4c-1.5 5-2 10-11 12-9-2-9.5-7-11-12Z" />
      <path d="M24 20v3" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 48 48" {...strokeProps}>
      <circle cx="24" cy="24" r="14" />
      <path d="M24 14a10 10 0 0 0-7 17" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  ),
};

export default function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  return icons[icon];
}
