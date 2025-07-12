import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cart } from '@/types/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Cart[]>([])

  function addItem(itemId: number) {
    const existingItem = items.value.find((item) => item.id === itemId)
    if (existingItem) {
      existingItem.pieces++
    } else {
      items.value.push({ id: itemId, pieces: 1 })
    }
  }

  // function removeItem(item) {
  //   items.value = items.value.filter((i) => i.id !== item.id)
  // }

  return { items, addItem }
})
