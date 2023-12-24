import { cva, type VariantProps } from 'class-variance-authority'

export type DrawerOverlayProps = VariantProps<typeof drawerOverlay>

const drawerOverlay = cva(
  'fixed left-0 top-0 h-[100vh] w-full opacity-40 bg-black z-drawer-overlay',
  {
    variants: {
      open: {
        true: 'block',
        false: 'hidden',
      },
    },
    defaultVariants: {
      open: false,
    },
  }
)

export const drawerOverlayVariant = (props: DrawerOverlayProps) =>
  drawerOverlay(props)
