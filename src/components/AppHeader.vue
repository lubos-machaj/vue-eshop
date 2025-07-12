<template>
  <header class="bg-black text-white">
    <div class="container mx-auto flex items-center justify-between px-5 py-4">
      <h1 class="text-xl font-bold uppercase">E-Shop</h1>
      <nav class="flex gap-2">
        <RouterLink activeClass="underline" to="/store">Store</RouterLink>
        <RouterLink activeClass="underline" to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
