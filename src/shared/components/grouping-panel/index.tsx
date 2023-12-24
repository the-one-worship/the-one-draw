'use client'

import {
  GroupingForm,
  type GroupingFormValues,
} from '@/shared/components/grouping-form'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/shared/components/ui/dialog'

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (data: GroupingFormValues) => void
}

export function GroupingPanel({ open, onClose, onSubmit }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="z-drawer p-16">
        <DialogTitle>Enter Groups</DialogTitle>
        <GroupingForm onSubmit={onSubmit}></GroupingForm>
      </DialogContent>
    </Dialog>
  )
}
