import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/types'

export const useProductStore = defineStore('product', () => {
  const items = ref<Product[]>([])

  function getProductById(itemId: number): Product {
    return items.value.find((item) => item.id === itemId)
  }

  function setItems(newItems: Product[]) {
    items.value = newItems
  }

  return { items, getProductById, setItems }
})
