<!-- الاقسام الموجوده في صفحة من نحن وفي صفحة عملنا  -->
<template>
  <section :id="id" class="mb-12 bg-white p-6 rounded-xl shadow-md text-gray-900 leading-relaxed">
    <h2 class="text-2xl font-bold text-blue-700 mb-4">{{ title }}</h2>
    <div class="space-y-4">
      <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  paragraphs: Array
})
</script>
