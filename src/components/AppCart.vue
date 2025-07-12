<template>
  <RouterLink
    to="/cart"
    class="fixed right-0 bottom-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-tl-lg bg-black text-white hover:bg-black/70"
  >
    <div class="relative h-full w-full">
      <IconCart
        class="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-white"
      />
      <span
        v-text="countAllItems"
        class="absolute top-1 right-1 h-4 w-4 rounded-full bg-white text-center text-xs text-black"
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
