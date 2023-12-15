import { MEMBERS_LIST } from '@/shared/constants/member'
import { NANO_HYPHEN_KEY } from '@/shared/constants/nano'
import shuffle from '@/shared/utils/shuffle'

export default function getEncodeShuffleMember() {
  const newMemberList = shuffle(MEMBERS_LIST)
  return newMemberList.map(({ key }) => key).join(NANO_HYPHEN_KEY)
}
