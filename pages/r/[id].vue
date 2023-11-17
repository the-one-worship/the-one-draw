<template>
  <div>{{ id }}</div>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const {
  name,
  params: { id },
} = useRoute()
</script>
