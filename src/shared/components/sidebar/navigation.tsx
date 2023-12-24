import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { DoubleButton } from '@/shared/components/ui/double-button'
import { cn } from '@/shared/helpers/class-name'

import { SidebarItem } from './sidebar-item'

type Props = {
  onClose: () => void
}
export function Navigation({ onClose }: Props) {
  const pathname = usePathname()
  return (
    <SidebarItem>
      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className={cn('p-2 text-muted-foreground hover:underline', {
            'text-white': pathname === '/',
          })}
          onClick={onClose}
        >
          <DoubleButton className="w-full">Home</DoubleButton>
        </Link>
      </div>
    </SidebarItem>
  )
}
