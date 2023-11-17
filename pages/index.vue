<template>
  <main class="mt-12 flex items-center justify-center">
    <NuxtLink
      :to="targetRoute"
      class="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded bg-primary px-1 py-1 text-accent hover:bg-white/50"
    >
      <PaintBrushIcon class="h-4 w-4" />
      <span> Start! </span>
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import PaintBrushIcon from '~/components/icons/outline/paint-brush.vue'
import getEncodeShuffleMember from '~/utils/get-encode-shuffle-member'

const targetRoute: RouteLocationRaw = {
  name: 'r-id',
  params: {
    id: getEncodeShuffleMember(),
  },
}
</script>
