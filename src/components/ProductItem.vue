<template>
  <article class="border-2 p-3">
    <h2
      v-text="item.name"
      class="mb-2 text-center capitalize"
    />
    <img
      :src="item.picture"
      :alt="item.name"
      class="mb-2 h-auto w-full"
    />
    <p class="flex items-center justify-between">
      <span
        v-text="formatPrice(item.price)"
        class="text-sm font-bold"
      />
      <button
        v-if="numberOfItemsInCart(item.id) < 1"
        class="button px-5"
        @click="cartStore.addItem(item.id)"
      >
        BUY
      </button>
      <span
        v-else
        class="text-sm"
      >
        <button
          class="button px-2"
          @click="cartStore.removeItem(item.id)"
        >
          -
        </button>
        <span
          v-text="numberOfItemsInCart(item.id)"
          class="px-1 font-bold"
        />
        <button
          class="button px-2"
          @click="cartStore.addItem(item.id)"
        >
          +
        </button>
      </span>
    </p>
  </article>
</template>

<script setup lang="ts">
  import { useCartStore } from '@/stores/cart'
  import type { Product, CartItem } from '@/types/types'
  import { formatPrice } from '@/utils/utils'

  const cartStore = useCartStore()

  defineProps<{
    item: Product
  }>()

  const numberOfItemsInCart = (id: number) => {
    const item: CartItem | undefined = cartStore.items.find((item: CartItem) => item.id === id)
    return item ? item.quantity : 0
  }
</script>
