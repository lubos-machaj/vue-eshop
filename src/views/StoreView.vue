<template>
  <section
    v-if="products.length"
    class="product-list"
  >
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :item="product"
    />
  </section>
  <p v-else>No products available.</p>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { Product } from '@/types/types'
  import { useProductStore } from '@/stores/products'
  import ProductItem from '@/components/ProductItem.vue'

  const productStore = useProductStore()
  const products = computed<Product[]>(() => productStore.items)
</script>
