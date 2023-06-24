<script setup lang="ts">
import { useRoute } from 'vue-router';

const i = useRoute().params.id
</script>

<template>
  <div>
    <h1 class="font-semibold text-2xl mb-2">
      Detail Product page
    </h1>

    <img
      :src="`https://picsum.photos/200/300?id=${i}`"
      alt="Product"
      class="w-full max-h-48 object-cover rounded-t-lg"
    />
    <div class="px-3 py-3">
      <h3 class="font-semibold">Product {{ i }}</h3>
      <div class="text-sm text-gray-600 mt-1">Description</div>
    </div>
  </div>
</template>
