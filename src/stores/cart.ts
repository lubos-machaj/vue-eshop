import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartItemType } from '@/types/types'
import { useProductStore } from '@/stores/products'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItemType[]>([])
  const productStore = useProductStore()

  const totalItems = computed<number>(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed<number>(() => {
    return items.value.reduce((total, item) => {
      const product = productStore.items.find((p) => p.id === item.id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  })

  function addItem(itemId: number) {
    const existingItem = items.value.find((item) => item.id === itemId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ id: itemId, quantity: 1 })
    }
  }

  function removeProduct(itemId: number) {
    const existingItem = items.value.find((item) => item.id === itemId)
    if (existingItem) {
      items.value = items.value.filter((item) => item.id !== itemId)
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

  return { items, totalItems, totalPrice, addItem, removeItem, removeProduct }
})
