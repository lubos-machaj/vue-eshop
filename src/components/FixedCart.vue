<template>
  <RouterLink
    to="/cart"
    class="fixed-cart"
    title="View Cart"
    aria-label="View Cart"
  >
    <div class="relative h-full w-full">
      <IconCart class="fixed-cart-icon" />
      <span
        v-if="countAllItems > 0"
        v-text="countAllItems"
        class="fixed-cart-badge"
      />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useCartStore } from '@/stores/cart'
  import IconCart from '@/components/icons/IconCart.vue'

  const cartStore = useCartStore()
  const countAllItems = computed(() => cartStore.totalItems)
</script>
