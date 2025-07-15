<template>
  <header class="bg-black text-white">
    <div class="header">
      <h1 class="header-logo">
        <RouterLink to="/">E-Shop</RouterLink>
      </h1>
      <nav class="header-nav">
        <template v-for="route in routes">
          <RouterLink
            v-if="route.name"
            :to="route.path"
            :key="route.name"
            class="header-nav-link"
            activeClass="header-nav-link-active"
            >{{ route.meta.title }}</RouterLink
          >
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const routes = router.getRoutes()
</script>
