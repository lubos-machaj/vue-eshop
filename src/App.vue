<template>
  <AppHeader />
  <main class="container mx-auto p-4">
    <RouterView />
  </main>
  <AppCart />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/products'
import productsData from './data/data.json'

import AppHeader from './components/AppHeader.vue'
import AppCart from './components/AppCart.vue'

const productStore = useProductStore()

// Initialize the store with data directly.
productStore.setItems(productsData)
</script>
