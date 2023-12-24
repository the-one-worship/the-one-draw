import { useCallback } from 'react'

import { useRouter } from 'next/navigation'

import { useToast } from '@/shared/components/ui/toast'
import { MEMBERS } from '@/shared/constants/member'
import { useClipboard } from '@/shared/hooks/use-clipboard'
import getEncodeShuffleMember from '@/shared/utils/get-encode-shuffle-member'
import getRandomIntByTimes from '@/shared/utils/get-random-int-by-times'

export function useActionButton() {
  const clipboard = useClipboard({ timeout: 1000 })
  const { toast } = useToast()
  const router = useRouter()
  const onDrawing = useCallback(() => {
    router.push(`/r?id=${getEncodeShuffleMember()}`)
  }, [router])

  const onPicking = useCallback(() => {
    const index = getRandomIntByTimes(MEMBERS.length, 1000)
    toast({ description: MEMBERS[index] })
  }, [toast])

  const onGrouping = useCallback(
    (groups: number) => {
      router.push(`/g?id=${getEncodeShuffleMember()}&gs=${groups}`)
    },
    [router]
  )

  const onCopyURL = useCallback(() => {
    clipboard.copy(window.location.href)
    toast({ description: 'Copied  ✨' })
  }, [clipboard, toast])

  return {
    onDrawing,
    onPicking,
    onGrouping,
    onCopyURL,
  }
}
