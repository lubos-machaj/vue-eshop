<template>
  <section class="cart-section-summary">
    <h2 class="mb-5 font-semibold">Total</h2>
    <p
      v-text="formatPrice(total)"
      class="font-bold"
    />
  </section>
</template>

<script setup lang="ts">
  import { formatPrice } from '@/utils/utils'
  defineProps<{
    total: number
  }>()
</script>
