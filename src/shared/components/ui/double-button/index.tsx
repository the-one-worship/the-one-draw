import { forwardRef } from 'react'

import {
  Button,
  type ButtonProps,
  buttonVariants,
} from '@/shared/components/ui/button'
import { cn } from '@/shared/helpers/class-name'

const DoubleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('group relative inline-block', className)}>
        <Button
          className="relative z-1 w-full group-hover:translate-x-1 group-hover:translate-y-1"
          ref={ref}
          {...props}
        />
        <Button
          className="absolute -bottom-1 -right-1 z-0 w-full"
          variant="outline"
        />
      </div>
    )
  }
)
DoubleButton.displayName = 'DoubleButton'

export { buttonVariants, DoubleButton }
