import HomeIcon from '~/components/icons/home.vue'
import ArrowPathIcon from '~/components/icons/arrow-path.vue'
import LinkIcon from '~/components/icons/link.vue'

export const NAV_ITEMS = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Draw',
    icon: ArrowPathIcon,
  },
  {
    name: 'Copy',
    icon: LinkIcon,
  },
] as const
