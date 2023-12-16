'use client'
import { useRouter } from 'next/navigation'

import type { VariantProps } from 'class-variance-authority'

import {
  buttonVariants,
  DoubleButton,
} from '@/shared/components/ui/double-button'
import getEncodeShuffleMember from '@/shared/utils/get-encode-shuffle-member'

type Props = VariantProps<typeof buttonVariants> & {
  className?: string
}
export function ActionDrawButton(props: Props) {
  const router = useRouter()
  const onDraw = () => {
    router.push(`/r?id=${getEncodeShuffleMember()}}`)
  }

  return (
    <DoubleButton onClick={onDraw} {...props}>
      Draw
    </DoubleButton>
  )
}
