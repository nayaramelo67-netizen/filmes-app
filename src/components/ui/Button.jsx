export default function Button({
  as: Tag = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',         // 'sm' | 'md' | 'lg'
  disabled = false,
  className = '',
  children,
  ...props
}) {
  const base = 'button'
  const variants = {
    primary: '',
    secondary: 'secondary',
    ghost: 'ghost'
  }
  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }
  return (
    <Tag
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  )
}
