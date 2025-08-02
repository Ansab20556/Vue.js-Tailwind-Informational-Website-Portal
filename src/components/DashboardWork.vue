<!-- pages/DashboardWork.vue -->
<template>
    <div>
        <h2 class="text-xl font-bold mb-4">إدارة مجالات العمل</h2>
        <form @submit.prevent="addField" class="mb-4 flex gap-2">
            <input v-model="newField" class="border p-2 rounded w-full" placeholder="أضف مجال عمل جديد" />
            <button class="bg-blue-600 text-white px-4 py-2 rounded">إضافة</button>
            <div class="flex justify-end">
                <button
                @click="deleteAllProjects"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                حذف جميع المشاريع
                </button>
            </div>
        </form>
        <ul class="space-y-2">
            <li
                v-for="(field, index) in fields"
                :key="index"
                class="bg-gray-100 p-3 rounded flex justify-between items-center">
                <span>{{ field }}</span>
                <div class="space-x-2">
                <button @click="editField(index)" class="text-blue-600 hover:cursor-pointer">✏️</button>
                <button @click="deleteField(index)" class="text-red-600 hover:cursor-pointer">🗑️</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const fields = ref([]);
const newField = ref('');

onMounted(() => {
  const stored = localStorage.getItem('workFields');
  if (stored) fields.value = JSON.parse(stored);
});

watch(fields, (newVal) => {
  localStorage.setItem('workFields', JSON.stringify(newVal));
}, { deep: true });

function addField() {
  if (newField.value.trim()) {
    fields.value.push(newField.value.trim());
    newField.value = '';
  }
}

function deleteField(index) {
    fields.value.splice(index, 1);
}

function editField(index) {
    const updated = prompt("تعديل مجال العمل:", fields.value[index]);
    if (updated !== null) {
        fields.value[index] = updated;
    }
}
function deleteAllProjects() {
    localStorage.removeItem("workFields")
    alert("تم حذف جميع المشاريع بنجاح")
    location.reload()
}
</script>
