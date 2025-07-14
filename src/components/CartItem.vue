<template>
  <article
    v-if="selectedProduct"
    class="mb-3 flex items-center border-2 px-2 py-3"
  >
    <div class="flex w-1/12 items-end justify-center">
      <button @click="cartStore.removeProduct(props.cartItem.id)">
        <IconX class="h-6 w-6 cursor-pointer" />
      </button>
    </div>
    <div class="flex-1 capitalize">
      {{ selectedProduct.name }}
    </div>
    <div class="w-1/6 text-right font-semibold">
      {{ formatPrice(selectedProduct.price) }}
    </div>
    <div class="w-1/6 text-center">
      {{ `${props.cartItem.quantity}x` }}
    </div>
    <div class="w-1/6 text-right font-semibold">
      {{ formatPrice(selectedProduct.price * props.cartItem.quantity) }}
    </div>
  </article>
</template>

<script setup lang="ts">
  import { useCartStore } from '@/stores/cart'
  import { useProductStore } from '@/stores/products'
  import type { CartItemType } from '@/types/types'
  import IconX from '@/components/icons/IconX.vue'
  import { formatPrice } from '@/utils/utils'

  const props = defineProps<{
    cartItem: CartItemType
  }>()

  const cartStore = useCartStore()
  const productStore = useProductStore()

  const selectedProduct = productStore.getProductById(props.cartItem.id)
</script>
