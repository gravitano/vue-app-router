<script setup lang="ts">
//
</script>

<template>
  <div>
    <h1 class="font-semibold text-2xl mb-2">Shop</h1>

    <div class="grid gap-6 grid-cols-6">
      <RouterLink :to="`/shop/products/${i}`" v-for="i in 6" :key="i" class="shadow rounded-lg">
        <img
          :src="`https://picsum.photos/200/300?id=${i}`"
          alt="Product"
          class="w-full max-h-48 object-cover rounded-t-lg"
        />
        <div class="px-3 py-3">
          <h3 class="font-semibold">Product {{ i }}</h3>
          <div class="text-sm text-gray-600 mt-1">Description</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
