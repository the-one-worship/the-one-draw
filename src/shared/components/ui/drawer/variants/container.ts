import { cva, type VariantProps } from 'class-variance-authority'

export type DrawerContainerProps = VariantProps<typeof drawerContainer>

const drawerContainer = cva(
  'fixed bg-background shadow-md transition-all z-drawer',
  {
    variants: {
      open: {
        true: 'visible',
        false: 'invisible',
      },
      direction: {
        left: 'top-0 left-0 h-[150vh] overflow-hidden -translate-x-full',
        right: 'top-0 right-0 h-[150vh] overflow-hidden translate-x-full',
        top: 'top-0 right-0 left-0 w-full -translate-y-full',
        bottom: 'right-0 left-0 bottom-0 w-full translate-y-full',
      },
    },
    compoundVariants: [
      {
        open: true,
        direction: 'left',
        class: 'translate-x-0',
      },
      {
        open: true,
        direction: 'right',
        class: 'translate-x-0',
      },
      {
        open: true,
        direction: 'top',
        class: 'translate-y-0',
      },
      {
        open: true,
        direction: 'bottom',
        class: 'translate-y-0',
      },
    ],
    defaultVariants: {
      open: false,
      direction: 'right',
    },
  }
)

export const drawerContainerVariant = (props: DrawerContainerProps) =>
  drawerContainer(props)
