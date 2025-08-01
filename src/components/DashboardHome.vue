<!-- src/components/DashboardHome.vue -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
      <div class="text-3xl font-bold text-blue-600">{{ messageCount }}</div>
      <div class="text-gray-600 dark:text-gray-300 mt-2">الرسائل</div>
    </div>
    <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
      <div class="text-3xl font-bold text-green-600">{{ visitorCount }}</div>
      <div class="text-gray-600 dark:text-gray-300 mt-2">الزوار</div>
    </div>
    <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
      <div class="text-3xl font-bold text-red-600">{{ donationCount }}</div>
      <div class="text-gray-600 dark:text-gray-300 mt-2">التبرعات</div>
    </div>
    <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
      <div class="text-3xl font-bold text-yellow-500">12</div>
      <div class="text-gray-600 dark:text-gray-300 mt-2">المستخدمون</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const messageCount = ref(0)
const visitorCount = ref(0)
const donationCount = ref(0)

onMounted(() => {
  // عدد الرسائل
  const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
  messageCount.value = messages.length

  // عدد الزوار (مثال: نزيد العدد كل مرة يدخل فيها المستخدم الصفحة)
  const visits = parseInt(localStorage.getItem("visitorCount") || "0")
  visitorCount.value = visits

  // عدد التبرعات (نفرض أنك تحفظ كل تبرع بنفس الطريقة)
  const donations = JSON.parse(localStorage.getItem("donations") || "[]")
  donationCount.value = donations.length
})
</script>
