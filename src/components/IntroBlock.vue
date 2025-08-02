<!-- النص الرئيسي الموجود في صفحة من نحن وفي صفحة عملنا  -->
<template>
  <div class="space-y-4 bg-white p-6 rounded-xl shadow-md text-gray-800 leading-loose">
    <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
  </div>
</template>

<script setup>
defineProps({
  paragraphs: Array
})
</script>
