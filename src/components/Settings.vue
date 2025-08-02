<template>
  <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-6">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">الإعدادات</h2>

    <!-- تغيير الوضع -->
    <div class="flex items-center justify-between">
      <span class="text-gray-700 dark:text-gray-200">الوضع الحالي: {{ theme === 'dark' ? 'داكن' : 'فاتح' }}</span>
      <button
        @click="toggleTheme"
        class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        تغيير الوضع
      </button>
    </div>

    <!-- حذف جميع البيانات -->
    <div class="flex items-center justify-between">
      <span class="text-gray-700 dark:text-gray-200">حذف جميع البيانات من Local Storage</span>
      <button
        @click="clearLocalStorage"
        class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
      >
        حذف الكل
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'light'
  applyTheme()
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  applyTheme()
}

function applyTheme() {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function clearLocalStorage() {
  if (confirm('هل أنت متأكد من حذف جميع البيانات؟')) {
    localStorage.clear()
    alert('تم حذف جميع البيانات بنجاح.')
    location.reload()
  }
}
</script>

<style scoped>
:root {
  color-scheme: light dark;
}
</style>
