<template>
  <div class="cart-section">
    <section class="cart-section-items">
      <template v-if="cartItems.length">
        <CartItem
          v-for="item in cartItems"
          :cartItem="item"
          :key="item.id"
        />
      </template>
      <p v-else>Your cart is empty.</p>
    </section>

    <CartSummary :total="cartStore.totalPrice" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import CartItem from '../components/Cart/CartItem.vue'
  import CartSummary from '../components/Cart/CartSummary.vue'

  import { useCartStore } from '@/stores/cart'

  const cartStore = useCartStore()
  const cartItems = computed(() => cartStore.items)
</script>
