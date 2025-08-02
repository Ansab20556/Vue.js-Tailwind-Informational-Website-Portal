<!-- components/WorkList.vue -->
<template>
  <div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="ابحث عن مجال عمل"
      class="mb-4 p-2 border w-full rounded"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div v-for="(field, index) in filteredFields" :key="index" class="bg-white p-3 rounded shadow">
        <a href="#" class="text-blue-600 hover:underline">{{ field }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const searchQuery = ref('');
const fields = ref([]);

onMounted(() => {
  const stored = localStorage.getItem("workFields");
  if (stored) fields.value = JSON.parse(stored);
});

const filteredFields = computed(() =>
  fields.value.filter(field =>
    field.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>
