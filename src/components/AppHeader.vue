<template>
  <header class="flex items-center justify-between bg-black px-5 py-3 text-white">
    <h1 class="text-xl font-bold uppercase">E-Shop</h1>
    <nav class="flex gap-2">
      <RouterLink activeClass="underline" to="/store">Store</RouterLink>
      <RouterLink activeClass="underline" to="/cart">Cart</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
