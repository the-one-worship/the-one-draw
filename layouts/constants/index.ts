import HomeIcon from '~/components/icons/solid/home.vue'
import PaintBrushIcon from '~/components/icons/solid/paint-brush.vue'
import LinkIcon from '~/components/icons/solid/link.vue'

export const NAV_ITEMS = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Draw',
    icon: PaintBrushIcon,
  },
  {
    name: 'Copy',
    icon: LinkIcon,
  },
] as const
