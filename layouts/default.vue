<template>
  <slot></slot>
  <nav class="h-18">
    <div class="ba h-18 fixed bottom-0 flex w-full justify-center">
      <ul
        class="flex w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-primary px-16 py-2 backdrop-blur"
      >
        <li
          v-for="{ name, icon } in NAV_ITEMS"
          :key="name"
          class="flex flex-col items-center gap-1 rounded p-4 hover:cursor-pointer hover:bg-white/80 hover:text-primary-light"
          @click="onClickNavItem(name)"
        >
          <component :is="icon" class="h-6 w-6 text-inherit" />
          <p class="text-xs text-inherit">{{ name }}</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NAV_ITEMS } from './constants'
import getEncodeShuffleMember from '~/utils/get-encode-shuffle-member'

const router = useRouter()

const navMethods = {
  Home() {
    router.push('/')
  },
  Draw() {
    router.push({ name: 'r-id', params: { id: getEncodeShuffleMember() } })
  },
  async Copy() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Copied!')
    } catch (error) {
      console.error(error)
    }
  },
}

const onClickNavItem = (type: 'Home' | 'Draw' | 'Copy') => {
  navMethods[type]()
}
</script>
