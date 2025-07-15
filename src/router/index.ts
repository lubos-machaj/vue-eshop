import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/store',
    },
    {
      path: '/store',
      name: 'store',
      meta: {
        title: 'Store',
      },
      component: StoreView,
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: 'Cart',
      },
      component: CartView,
    },
  ],
})

export default router
