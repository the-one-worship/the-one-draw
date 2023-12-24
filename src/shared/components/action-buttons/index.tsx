'use client'
import { useState } from 'react'

import { GroupingPanel } from '@/shared/components/grouping-panel'
import { DoubleButton } from '@/shared/components/ui/double-button'
import { cn } from '@/shared/helpers/class-name'
import { useActionButton } from '@/shared/hooks/use-action-button'

type Props = {
  className?: string
  onClose?: () => void
  callbacks?: {
    drawing?: () => void
    picking?: () => void
    copyURL?: () => void
    grouping?: () => void
  }
}
export function ActionButtons({ className, callbacks }: Props) {
  const [isGroupingPanelVisible, setGroupingPanelVisible] = useState(false)
  const { onPicking, onDrawing, onGrouping, onCopyURL } = useActionButton()
  return (
    <>
      <div className={cn('flex flex-col gap-6', className)}>
        <DoubleButton
          className="w-full"
          variant="outline"
          onClick={() => {
            onDrawing()
            callbacks?.drawing?.()
          }}
        >
          Drawing
        </DoubleButton>
        <DoubleButton
          className="w-full"
          variant="outline"
          onClick={() => {
            onPicking()
            callbacks?.picking?.()
          }}
        >
          Pick up
        </DoubleButton>
        <DoubleButton
          className="w-full"
          variant="outline"
          onClick={() => {
            setGroupingPanelVisible(true)
          }}
        >
          Grouping
        </DoubleButton>
        <DoubleButton
          className="w-full"
          variant="outline"
          onClick={() => {
            onCopyURL()
            callbacks?.copyURL?.()
          }}
        >
          Copy URL
        </DoubleButton>
      </div>
      <GroupingPanel
        open={isGroupingPanelVisible}
        onSubmit={({ groups }) => {
          onGrouping(groups)
          setGroupingPanelVisible(false)
          callbacks?.grouping?.()
        }}
        onClose={() => {
          setGroupingPanelVisible(false)
        }}
      />
    </>
  )
}
