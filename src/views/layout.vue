<script setup lang="ts">
//
</script>

<template>
  <div>
    <header
      class="flex gap-6 items-center py-3 shadow-md bg-white px-4 md:px-6 2xl:px-0 justify-between"
    >
      <RouterLink to="/" class="font-semibold text-lg"> Acme </RouterLink>

      <nav>
        <ul class="flex gap-3">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/shop">Shop</RouterLink>
          </li>
        </ul>
      </nav>

      <nav class="flex gap-3 items-center">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </header>

    <div class="px-4 md:px-6 2xl:px-0 py-6">
      <RouterView />
    </div>

    <footer class="px-4 md:px-6 2xl:px-0 text-sm text-gray-600">
      Copyright &copy; {{ new Date().getFullYear() }} &middot; All rights
      reserved.
    </footer>
  </div>
</template>
