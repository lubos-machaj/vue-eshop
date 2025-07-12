import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cart } from '@/types/types'
import { computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Cart[]>([])

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  function addItem(itemId: number) {
    const existingItem = items.value.find((item) => item.id === itemId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ id: itemId, quantity: 1 })
    }
  }

  function removeItem(itemId: number) {
    const existingItem = items.value.find((item) => item.id === itemId)
    if (existingItem) {
      existingItem.quantity--
      if (existingItem.quantity <= 0) {
        items.value = items.value.filter((item) => item.id !== itemId)
      }
    }
  }

  return { items, totalItems, addItem, removeItem }
})
