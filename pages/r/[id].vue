<template>
  <main>
    <ul
      v-if="groups"
      class="flex flex-col gap-4 bg-gradient-to-b from-primary to-background py-8"
    >
      <li
        v-for="[from, to] in groups"
        :key="`${from}-${to}`"
        class="flex items-center justify-center gap-2"
      >
        <p>{{ from }}</p>
        <ArrowLongRight class="h-6 w-6" />
        <p>{{ to }}</p>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ArrowLongRight from '~/components/icons/solid/arrow-long-right.vue'

import decodeShuffleMember from '~/utils/decode-shuffle-member'
import { MemberMap } from '~/constants/member'

const router = useRouter()

const {
  params: { id },
} = useRoute()

const ids = decodeShuffleMember(String(id))

watchEffect(() => {
  if (ids) {
    return
  }

  router.push({ name: 'index' })
})

const groups = ids?.map((item, index) => {
  const nextIdx = index + 1 < ids?.length ? index + 1 : 0
  const next = ids[nextIdx]

  return [item, next].map(val => MemberMap.get(val))
})
</script>
