<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <section
      id="cart-items"
      class="mb-4 w-full sm:w-2/3"
    >
      <template v-if="cartItems.length">
        <CartItem
          v-for="item in cartItems"
          :cartItem="item"
          :key="item.id"
        />
      </template>
      <p v-else>Your cart is empty.</p>
    </section>

    <section
      id="summary"
      class="h-fit w-full border-2 p-5 text-center sm:w-1/3"
    >
      <h2 class="mb-5 text-xl font-semibold">Total</h2>
      <p
        v-text="formatPrice(cartStore.totalPrice)"
        class="text-xl font-bold"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import CartItem from '../components/CartItem.vue'
  import { useCartStore } from '@/stores/cart'
  import { formatPrice } from '@/utils/utils'

  const cartStore = useCartStore()

  const cartItems = computed(() => cartStore.items)
</script>
