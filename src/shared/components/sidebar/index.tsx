'use client'
import { useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'

import { ActionButtons } from '@/shared/components/action-buttons'
import { Button } from '@/shared/components/ui/button'
import { Drawer } from '@/shared/components/ui/drawer'
import { cn } from '@/shared/helpers/class-name'

import { Navigation } from './navigation'
import { SidebarItem } from './sidebar-item'

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const onToggleDrawer = () => {
    setOpen(current => !current)
  }
  const onCloseDrawer = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="mt-8"></div>

      <Drawer
        className="overflow-y-auto rounded-t-xl bg-primary-foreground"
        open={open}
        direction="bottom"
        onClose={onCloseDrawer}
        size={500}
      >
        <div className="flex justify-center py-4">
          <span
            className="h-2 w-20 cursor-pointer rounded-lg border bg-foreground"
            onClick={onCloseDrawer}
          ></span>
        </div>
        <main className="mx-auto mb-4 flex max-w-xs flex-col">
          <Navigation onClose={onCloseDrawer} />
          <SidebarItem>
            <ActionButtons
              className="mt-2"
              callbacks={{
                drawing: onCloseDrawer,
                copyURL: onCloseDrawer,
                grouping: onCloseDrawer,
                picking: onCloseDrawer,
              }}
            />
          </SidebarItem>
        </main>
      </Drawer>

      <nav className="mx-auto flex w-full justify-center p-4">
        <Button
          className={cn('fixed bottom-3 rounded-full', { 'z-drawer': open })}
          onClick={onToggleDrawer}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </Button>
      </nav>
    </>
  )
}
