export const Badge = ({ children }: { children: string }) => (
  <span className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-ink">{children}</span>
)
export const PlaceholderTag = ({ children = 'Placeholder' }: { children?: string }) => (
  <span className="rounded-md border border-gold/50 px-2 py-0.5 text-xs font-medium text-gold">{children}</span>
)
