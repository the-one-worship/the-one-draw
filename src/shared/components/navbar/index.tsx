'use client'
import { ActionDrawButton } from '@/shared/components/action-draw-button'
import { DoubleButton } from '@/shared/components/ui/double-button'
import { useClipboard } from '@/shared/hooks/use-clipboard'

export function Navbar() {
  const clipboard = useClipboard({ timeout: 1000 })
  return (
    <>
      <div className="h-18 w-full"></div>
      <nav className="h-18 fixed bottom-0 mx-auto w-full rounded-tl-lg rounded-tr-lg bg-primary-foreground p-8">
        <div className="mx-auto flex max-w-lg justify-center gap-4">
          <ActionDrawButton className="w-full" />
          <DoubleButton
            className="w-full"
            variant="outline"
            onClick={() => {
              clipboard.copy(window.location.href)
            }}
          >
            {clipboard.copied ? 'Copied  ✨' : 'Copy'}
          </DoubleButton>
        </div>
      </nav>
    </>
  )
}
