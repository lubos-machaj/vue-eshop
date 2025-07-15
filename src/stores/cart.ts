import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem } from '@/types/types'
import { useProductStore } from '@/stores/products'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const productStore = useProductStore()

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))

  const totalPrice = computed(() =>
    items.value.reduce((total, item) => {
      const product = productStore.items.find((p) => p.id === item.id)
      return total + (product?.price ?? 0) * item.quantity
    }, 0),
  )

  const findItemById = (itemId: number) => items.value.find((item) => item.id === itemId)

  const removeItemFromArray = (itemId: number) => {
    items.value = items.value.filter((item) => item.id !== itemId)
  }

  function addItem(itemId: number) {
    const existingItem = findItemById(itemId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ id: itemId, quantity: 1 })
    }
  }

  function removeProduct(itemId: number) {
    const existingItem = findItemById(itemId)
    if (existingItem) {
      removeItemFromArray(itemId)
    }
  }

  function removeItem(itemId: number) {
    const existingItem = findItemById(itemId)
    if (existingItem) {
      existingItem.quantity--
      if (existingItem.quantity <= 0) {
        removeItemFromArray(itemId)
      }
    }
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    removeProduct,
  }
})
