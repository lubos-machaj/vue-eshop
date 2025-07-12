<template>
  <AppHeader />
  <main class="container mx-auto p-4">
    <RouterView />
  </main>
  <AppCart />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppCart from './components/AppCart.vue'
</script>
