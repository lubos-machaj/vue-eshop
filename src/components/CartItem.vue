<template>
  <article
    v-if="selectedProduct"
    class="mb-3 flex items-center justify-between border-2 p-3"
  >
    <button @click="cartStore.removeProduct(props.cartItem.id)">
      <IconX class="h-6 w-6 cursor-pointer" />
    </button>
    <span
      v-text="selectedProduct.name"
      class="capitalize"
    />
    <span
      v-text="formatPrice(selectedProduct.price)"
      class="font-semibold"
    />
    <span v-text="`${props.cartItem.quantity}x`" />
    <span
      v-text="formatPrice(selectedProduct.price * props.cartItem.quantity)"
      class="font-semibold"
    />
  </article>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import { useCartStore } from '@/stores/cart'
  import { useProductStore } from '@/stores/products'
  import type { Cart } from '@/types/types'
  import IconX from '@/components/icons/IconX.vue'
  import { formatPrice } from '@/utils/utils'

  const props = defineProps<{
    cartItem: Cart
  }>()

  const cartStore = useCartStore()
  const productStore = useProductStore()

  const selectedProduct = productStore.getProductById(props.cartItem.id)
</script>
