<template>
  <div class="mt-6 overflow-x-auto bg-white p-6 rounded-3xl shadow-md w-full max-w-5xl mx-auto">
    <!-- رأس الجدول -->
    <div class="flex justify-between items-center mb-4 border-b pb-2">
      <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">📋 قائمة التبرعات</h2>
      <button
        @click="clearAll"
        class="text-red-600 hover:text-white hover:bg-red-500 border border-red-500 transition px-4 py-1 rounded-full text-sm"
      >
        🗑️ حذف الكل
      </button>
    </div>

    <!-- الجدول -->
    <table class="min-w-full text-right text-sm border-separate border-spacing-y-2">
      <thead class="bg-[#007dbc] text-white">
        <tr>
          <th class="px-4 py-2 rounded-r-xl">النوع</th>
          <th class="px-4 py-2">المبلغ</th>
          <th class="px-4 py-2">الدولة</th>
          <th class="px-4 py-2">العملة</th>
          <th class="px-4 py-2 rounded-l-xl">التاريخ</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(donation, index) in donations"
          :key="index"
          :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
          class="text-gray-700 shadow-sm rounded-lg"
        >
          <td class="px-4 py-2 font-medium">
            <span
              class="inline-block px-2 py-1 text-xs rounded-full"
              :class="donation.type === 'once' ? 'bg-pink-100 text-pink-800' : 'bg-green-100 text-green-800'"
            >
              {{ donation.type === 'مرة واحدة' ? 'مرة واحدة 💖' : 'شهري 🔁' }}
            </span>
          </td>
          <td class="px-4 py-2 font-semibold text-gray-800">{{ donation.amount }}</td>
          <td class="px-4 py-2">{{ donation.country || '-' }}</td>
          <td class="px-4 py-2">{{ donation.currency || '-' }}</td>
          <td class="px-4 py-2 text-gray-500">{{ formatDate(donation.date) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const donations = ref([])

onMounted(() => {
  donations.value = JSON.parse(localStorage.getItem('donations') || '[]')
})

function clearAll() {
  if (confirm('هل أنت متأكد من حذف جميع التبرعات؟')) {
    localStorage.removeItem('donations')
    donations.value = []
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>
