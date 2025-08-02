<!-- src/components/DashboardHome.vue -->
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
            <div class="text-3xl font-bold text-blue-600">{{ messageCount }}</div>
            <div class="text-gray-600 dark:text-gray-300 mt-2">الرسائل</div>
        </div>
        <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
            <div class="text-3xl font-bold text-green-600">{{ projectsCount }}</div>
            <div class="text-gray-600 dark:text-gray-300 mt-2">عدد المشاريع</div>
        </div>
        <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
            <div class="text-3xl font-bold text-pink-500"> ${{ totalAmount }}</div>
            <div class="text-gray-600 dark:text-gray-300 mt-2">اجمالي التبرعات</div>
        </div>
        <div class=" bg-white dark:bg-gray-800 p-6 rounded shadow text-center hover:-translate-y-1 duration-300">
            <div class="text-3xl font-bold text-yellow-500">12</div>
            <div class="text-gray-600 dark:text-gray-300 mt-2">المستخدمون</div>
        </div>
        

    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 py-12">
        <RecentDonors></RecentDonors>
        <DonationsTypeChart></DonationsTypeChart>
        
    </div>
    <DonationsChart></DonationsChart>
    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecentDonors from './RecentDonors.vue'
import DonationsChart from './DonationsChart.vue'
import DonationsTypeChart from './DonationsTypeChart.vue'


const messageCount = ref(0)
const donationCount = ref(0)
const projectsCount = ref(0)
const donations = ref([])
const totalAmount = ref(0)

onMounted(() => {
  // عدد الرسائل
  const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
  messageCount.value = messages.length

  // عدد التبرعات (نفرض أنك تحفظ كل تبرع بنفس الطريقة)
  const donations = JSON.parse(localStorage.getItem("donations") || "[]")
  donationCount.value = donations.length

  // عدد المشاريع 
const projects = JSON.parse(localStorage.getItem("workFields") || "[]")
  projectsCount.value = projects.length

  // مجموع التبرعات 
donations.value = JSON.parse(localStorage.getItem('donations') || '[]')

totalAmount.value = donations.value.reduce((sum, d) => sum + Number(d.amount), 0)
})

</script>
