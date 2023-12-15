import getEncodeShuffleMember from '@/shared/utils/get-encode-shuffle-member'

export function generateStaticParams() {
  return [
    {
      id: getEncodeShuffleMember(),
    },
  ]
}

export default function RenderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
