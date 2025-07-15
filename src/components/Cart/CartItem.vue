<template>
  <article
    v-if="selectedProduct"
    class="cart-item"
  >
    <div class="flex w-1/12 items-end justify-start">
      <button
        @click="cartStore.removeProduct(props.cartItem.id)"
        :aria-label="`Remove ${selectedProduct.name} from cart`"
      >
        <IconX class="h-7 w-7 cursor-pointer" />
      </button>
    </div>
    <div class="flex-1 capitalize">
      {{ selectedProduct.name }}
    </div>
    <div class="w-1/6 text-right font-semibold">
      {{ formatPrice(selectedProduct.price) }}
    </div>
    <div class="w-1/6 text-right">
      {{ `${props.cartItem.quantity}x` }}
    </div>
    <div class="w-1/6 text-right font-semibold">
      {{ formatPrice(selectedProduct.price * props.cartItem.quantity) }}
    </div>
  </article>
</template>

<script setup lang="ts">
  import { useProductStore } from '@/stores/products'
  import { useCartStore } from '@/stores/cart'
  import IconX from '@/components/icons/IconX.vue'
  import type { CartItem } from '@/types/types'
  import { formatPrice } from '@/utils/utils'

  const props = defineProps<{
    cartItem: CartItem
  }>()

  const cartStore = useCartStore()
  const productStore = useProductStore()

  const selectedProduct = productStore.getProductById(props.cartItem.id)
</script>
