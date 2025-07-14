import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductItemType } from '@/types/types'

export const useProductStore = defineStore('product', () => {
  const items = ref<ProductItemType[]>([])

  function getProductById(itemId: number): ProductItemType | undefined {
    return items.value.find((item) => item.id === itemId)
  }

  function setItems(newItems: ProductItemType[]) {
    items.value = newItems
  }

  return { items, getProductById, setItems }
})
