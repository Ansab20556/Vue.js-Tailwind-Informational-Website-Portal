<!-- القوائم الجانبية الموجوده في صفحة من نحن وفي صفحة عملنا -->
<template>
  <nav class="bg-gray-100 p-4 rounded-xl shadow-md w-full lg:w-1/4">
    <h2 class="text-xl font-bold mb-4">العناوين</h2>
    <ul class="space-y-2">
      <li v-for="(item, i) in items" :key="i">
        <a :href="'#' + item.id" class="text-blue-600 hover:underline">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  items: Array
})
</script>
