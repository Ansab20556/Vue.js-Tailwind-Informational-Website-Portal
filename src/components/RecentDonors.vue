<template>
  <div class="bg-white p-6 rounded-2xl shadow-md">
    <h3 class="text-xl font-bold mb-4 text-gray-800 border-b pb-2">🫶 آخر 5 متبرعين</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-[#007dbc] text-white">
          <tr>
            <th class="px-4 py-2 text-right text-sm font-semibold">النوع</th>
            <th class="px-4 py-2 text-right text-sm font-semibold">المبلغ</th>
            <th class="px-4 py-2 text-right text-sm font-semibold">التاريخ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(donor, index) in recentDonors"
            :key="index"
            :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
          >
            <td class="px-4 py-2 text-sm">
              <span
                class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                :class="donor.type === 'مرة واحدة' ? 'bg-pink-100 text-pink-800' : 'bg-green-100 text-green-800'"
              >
                {{ donor.type === 'مرة واحدة' ? 'تبرع مرة واحدة 💖' : 'تبرع شهري 🔁' }}
              </span>
            </td>
            <td class="px-4 py-2 text-sm font-semibold text-gray-700">{{ donor.amount }}</td>
            <td class="px-4 py-2 text-sm text-gray-500">{{ formatDate(donor.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const recentDonors = ref([])

onMounted(() => {
  const donations = JSON.parse(localStorage.getItem('donations') || '[]')
  recentDonors.value = donations.slice(0, 5)
})

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>
