<template>
  <article class="product">
    <h2
      v-text="item.name"
      class="product-title"
    />
    <img
      :src="item.picture"
      :alt="item.name"
      class="mb-2 h-auto w-full"
    />
    <p class="product-details">
      <span
        v-text="formatPrice(item.price)"
        class="text-2xl font-bold"
      />
      <button
        v-if="numberOfItemsInCart(item.id) < 1"
        class="button"
        @click="cartStore.addItem(item.id)"
        v-text="'BUY'"
      />
      <span v-else>
        <button
          class="button button-controls"
          @click="cartStore.removeItem(item.id)"
          v-text="'-'"
        />
        <span
          v-text="numberOfItemsInCart(item.id)"
          class="inline-block w-11 px-2 text-center text-xl font-bold"
        />
        <button
          class="button button-controls"
          @click="cartStore.addItem(item.id)"
          v-text="'+'"
        />
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
