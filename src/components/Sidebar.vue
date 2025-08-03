<!-- القائمة الموجوده في لوحة التحكم  -->
<template>
  <aside
  :class="[
    theme === 'dark' ? 'dark' : 'light',
    { 'translate-x-full md:translate-x-0': !isOpen },
    'fixed md:static top-0 right-0 z-50 text-white dark:bg-gray-100 dark:text-gray-800 w-64 h-[600px] p-6 transition-transform duration-300'
  ]"
>

    <!-- رأس القائمة للجوال -->
    <div class="flex justify-between items-center mb-6 md:hidden">
      <h2 class="text-xl font-bold">القائمة</h2>
      <button @click="$emit('close')" class="text-white text-2xl">&times;</button>
    </div>

    <!-- عنوان القائمة -->
    <h2 class="hidden md:block text-xl font-bold mb-6">لوحة التحكم</h2>

    <!-- عناصر التنقل -->
    <nav class="space-y-4" >
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'dashboardhome')">الرئيسية</button>
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'messages')">الرسائل</button>
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'projects')">المشاريع / البرامج</button>
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'news')">التبرعات</button>
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'users')">إدارة المستخدمين</button>
        <button class="block w-full text-right hover:bg-gray-700 p-2 rounded" @click="$emit('navigate', 'settings')">الإعدادات</button>
        <button class="block w-full text-right hover:bg-red-700 p-2 rounded" @click="handleLogout">تسجيل الخروج</button>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()



const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme() {
  localStorage.setItem('theme', theme.value)
  console.log(theme.value)
}

onMounted(() => {
  applyTheme()
})

// زر تسجيل الخروج 
function handleLogout() {
    alert('تم تسجيل الخروج')
    router.push('/')
}


</script>
<style>
/* الوضع الداكن */
.light{
  background-color: #007dbc;
}
.dark {
  background-color: #1f2937;
  color: #f9fafb; 
}
</style>
