import type { CSSProperties } from 'react'

export const DIRECTION_STYLE_DICT = ({
  size,
}: {
  size: number | string
}): Record<'left' | 'right' | 'top' | 'bottom', CSSProperties> => ({
  left: {
    top: 0,
    left: 0,
    transform: 'translate3d(-100%, 0, 0)',
    width: size,
    height: '100vh',
  },
  right: {
    top: 0,
    right: 0,
    transform: 'translate3d(100%, 0, 0)',
    width: size,
    height: '100vh',
  },
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translate3d(0, 100%, 0)',
    width: '100%',
    height: size,
  },
  top: {
    left: 0,
    right: 0,
    top: 0,
    transform: 'translate3d(0, -100%, 0)',
    width: '100%',
    height: size,
  },
})
