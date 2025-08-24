import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'transform hover:scale-105 active:scale-95',
          {
            'gradient-primary text-primary-foreground gradient-primary-hover shadow-lg hover:shadow-xl glow-primary': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary-hover': variant === 'secondary',
            'glass-card border hover:border-primary/30 hover:text-foreground transition-all duration-300': variant === 'outline',
            'hover:glass-card hover:text-foreground transition-all duration-300': variant === 'ghost',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-11 px-8 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }