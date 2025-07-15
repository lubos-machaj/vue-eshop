<template>
  <AppHeader />
  <main class="container mx-auto p-4">
    <RouterView />
  </main>
  <FixedCart />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useProductStore } from './stores/products'
  import productsData from './data/data.json'

  import AppHeader from './components/AppHeader.vue'
  import FixedCart from './components/FixedCart.vue'

  const productStore = useProductStore()

  // Initialize product store with data from JSON file
  productStore.setItems(productsData)
</script>
