<template>
  <section
    v-if="products.length"
    id="product-list"
    class="product-list"
  >
    <article
      class="border-2 p-3"
      v-for="item in products"
      :key="item.id"
    >
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
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { Product } from '@/types/types'
  import { formatPrice } from '@/utils/utils'
  import { useCartStore } from '@/stores/cart'
  import { useProductStore } from '@/stores/products'

  const cartStore = useCartStore()
  const productStore = useProductStore()

  const products = ref<Product[]>(productStore.items)

  const numberOfItemsInCart = (id: number) => {
    const item = cartStore.items.find((item) => item.id === id)
    return item ? item.quantity : 0
  }
</script>
