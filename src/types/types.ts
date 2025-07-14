/**
 * Product type for shop items
 */
export interface Product {
  id: number
  name: string
  price: number
  picture: string
}

/**
 * Cart item type
 */
export interface CartItem {
  id: number
  quantity: number
}
