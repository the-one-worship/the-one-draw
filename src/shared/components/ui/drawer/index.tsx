'use client'
import { type CSSProperties, useEffect, useMemo, useRef } from 'react'

import { cn } from '@/shared/helpers/class-name'

import {
  type DrawerContainerProps,
  drawerContainerVariant,
} from './variants/container'
import {
  type DrawerOverlayProps,
  drawerOverlayVariant,
} from './variants/overlay'

type Props = DrawerContainerProps &
  DrawerOverlayProps & {
    onClose: () => void
    lockBackgroundScroll?: boolean
    children: React.ReactNode
    duration?: number
    className?: string
    size?: string | number
  }

export const Drawer = ({
  open,
  direction = 'right',
  children,
  duration = 500,
  size = 250,
  className,
  lockBackgroundScroll = true,
  onClose = () => {},
}: Props) => {
  const bodyRef = useRef<HTMLBodyElement | null>(null)

  useEffect(() => {
    bodyRef.current = window.document.querySelector('body')
    if (!bodyRef.current || !lockBackgroundScroll) return

    if (open) {
      bodyRef.current.style.overflow = 'hidden'
      return
    }
    bodyRef.current.style.overflow = ''
  }, [lockBackgroundScroll, open])

  const sizePropertyName: keyof CSSProperties = useMemo(() => {
    if (direction === 'top' || direction === 'bottom') return 'height'
    return 'width'
  }, [direction])

  return (
    <div data-drawer-open={open}>
      <nav
        role="navigation"
        style={{
          transitionDuration: `${duration}ms`,
          [sizePropertyName]: size,
        }}
        className={cn(drawerContainerVariant({ open, direction }), className)}
      >
        {children}
      </nav>
      <label className={cn(drawerOverlayVariant({ open }))} onClick={onClose} />
    </div>
  )
}
