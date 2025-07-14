<template>
  <section
    v-if="products.length"
    id="product-list"
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
  import { ref } from 'vue'
  import type { ProductItemType } from '@/types/types'
  import { useProductStore } from '@/stores/products'
  import ProductItem from '@/components/ProductItem.vue'

  const productStore = useProductStore()

  const products = ref<ProductItemType[]>(productStore.items)
</script>
