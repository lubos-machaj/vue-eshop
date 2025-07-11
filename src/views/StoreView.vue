<template>
  <ul>
    <li v-for="item in data" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data = ref([])

onMounted(async () => {
  const res = await fetch('/data.json')
  data.value = await res.json()
  console.log('data', data.value)
})
</script>
