export default function InkButton({
  children,
  onClick,
  className = '',
  variant = 'ink',
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'ink' | 'forest' | 'ghost'
}) {
  const base =
    variant === 'ink'
      ? 'bg-ink text-milk hover:bg-forest'
      : variant === 'forest'
      ? 'bg-forest text-milk hover:bg-forest-deep'
      : 'bg-transparent text-ink border border-ink/10 hover:bg-ink/[0.06]'
  return (
    <button
      onClick={onClick}
      className={`btn-island ${variant === 'ghost' ? 'btn-island-ghost' : ''} ${base} ${className}`}
    >
      <span>{children}</span>
      <span className="btn-icon">→</span>
    </button>
  )
}
