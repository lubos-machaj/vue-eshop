import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/types'

export const useProductStore = defineStore('product', () => {
  const items = ref<Product[]>([])

  function setItems(newItems: Product[]) {
    items.value = newItems
  }

  return { items, setItems }
})
