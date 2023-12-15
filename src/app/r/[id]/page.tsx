'use client'
import { useEffect, useMemo } from 'react'

import { useRouter } from 'next/navigation'

import ArrowLongRightIcon from '@/shared/components/ui/icons/solid/arrow-long-right'
import { MemberMap } from '@/shared/constants/member'
import decodeShuffleMember from '@/shared/utils/decode-shuffle-member'
import getEncodeShuffleMember from '@/shared/utils/get-encode-shuffle-member'

type Props = {
  params: { id: string }
}

export default function RenderPage({ params: { id } }: Props) {
  const ids = useMemo(() => decodeShuffleMember(id), [id])
  const groups = useMemo(
    () =>
      ids?.map((item, index) => {
        const nextIdx = index + 1 < ids?.length ? index + 1 : 0
        const next = ids[nextIdx]

        return [item, next].map(val => MemberMap.get(val))
      }),
    [ids]
  )
  const router = useRouter()

  useEffect(() => {
    if (ids) return
    router.push(`/r/${getEncodeShuffleMember()}`)
  }, [ids, router])

  return (
    <div className="mt-8 flex items-center justify-center p-8">
      <ul className="grid gap-4">
        {groups?.map(([from, to]) => (
          <li
            key={`${from}-${to}`}
            className="grid grid-cols-3 gap-2 text-xl font-bold"
          >
            <p className="justify-self-end">{from}</p>
            <ArrowLongRightIcon className="h-6 w-6 justify-self-center" />
            <p className="justify-self-start">{to}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
