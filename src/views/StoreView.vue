<template>
  <section v-if="data.length" class="product-list">
    <article class="border-2 p-3" v-for="item in data" :key="item.id">
      <h2 v-text="item.name" class="mb-2 text-center capitalize" />
      <img :src="item.picture" :alt="item.name" class="mb-2 h-auto w-full" />
      <p class="flex items-center justify-between">
        <span v-text="formatPrice(item.price)" class="text-sm font-bold" />
        <button
          class="cursor-pointer rounded-lg bg-black px-5 py-1 text-sm font-semibold text-white hover:bg-black/70"
          @click="cartStore.addItem(item.id)"
        >
          BUY
        </button>
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product } from '@/types/types'
import { formatPrice } from '@/utils/utils'
import { useCartStore } from '@/stores/cart'

const data = ref<Product[]>([])
const cartStore = useCartStore()

onMounted(async () => {
  const res = await fetch('/src/data/data.json')
  data.value = await res.json()
})
</script>
