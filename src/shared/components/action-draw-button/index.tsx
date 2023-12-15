import type { VariantProps } from 'class-variance-authority'

import {
  buttonVariants,
  DoubleButton,
} from '@/shared/components/ui/double-button'
import { cn } from '@/shared/helpers/class-name'
import getEncodeShuffleMember from '@/shared/utils/get-encode-shuffle-member'

type Props = VariantProps<typeof buttonVariants> & {
  className?: string
}
export function ActionDrawButton({ className, ...props }: Props) {
  // const onDraw = () => {}
  return (
    <a className={cn(className)} href={`/r/${getEncodeShuffleMember()}`}>
      <DoubleButton {...props} className="w-full">
        Draw
      </DoubleButton>
    </a>
  )
}
