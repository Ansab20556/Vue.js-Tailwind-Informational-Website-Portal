<template>
    <div :class="theme === 'dark' ? 'dark container' : 'light container'">
        <h2 class="title">الإعدادات</h2>

        <div class="row">
        <span>الوضع الحالي: {{ theme === 'dark' ? 'داكن' : 'فاتح' }}</span>
        <button @click="toggleTheme" class="btn btn-primary">تغيير الوضع</button>
        </div>

        <div class="row">
        <span>حذف جميع البيانات من Local Storage</span>
        <button @click="clearLocalStorage" class="btn btn-danger">حذف الكل</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme() {
  localStorage.setItem('theme', theme.value)
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme()
}

onMounted(() => {
  applyTheme()
})

function clearLocalStorage() {
  if (confirm('هل أنت متأكد من حذف جميع البيانات؟')) {
    localStorage.clear()
    alert('تم حذف جميع البيانات بنجاح.')
    location.reload()
  }
}
</script>

<style scoped>
.container {
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  max-width: 400px;
  margin: 2rem auto;
  font-family: 'Arial', sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* أزرار */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
}
.btn-primary {
  background-color: #2563eb;
}
.btn-primary:hover {
  background-color: #1e40af;
}
.btn-danger {
  background-color: #dc2626;
}
.btn-danger:hover {
  background-color: #991b1b;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

/* الوضع الفاتح */
.light {
  background-color: #ffffff;
  color: #1f2937; 
}

/* الوضع الداكن */
.dark {
  background-color: #1f2937;
  color: #f9fafb; 
}
</style>
