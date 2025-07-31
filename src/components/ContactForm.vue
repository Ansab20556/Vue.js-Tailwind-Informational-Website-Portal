<!-- components/ContactForm.vue -->
<template>
  <section class="max-w-2xl mx-auto bg-white p-6 rounded shadow my-8 dark:bg-gray-800">
    <h2 class="text-center text-2xl font-bold mb-4">تواصل معنا</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- الاسم الكامل -->
      <div>
        <label class="block font-bold mb-1">الاسم الكامل</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border border-gray-300 p-2 rounded"
        />
        <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</div>
      </div>

      <!-- البريد الإلكتروني -->
      <div>
        <label class="block font-bold mb-1">البريد الإلكتروني</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border border-gray-300 p-2 rounded"
        />
        <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>
      </div>

      <!-- الرسالة -->
      <div>
        <label class="block font-bold mb-1">الرسالة</label>
        <textarea
          v-model="form.message"
          class="w-full border border-gray-300 p-2 rounded"
        ></textarea>
        <div v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</div>
      </div>

      <button
        type="submit"
        class="bg-[#007dbc] text-white px-6 py-2 rounded hover:bg-[#005f91]"
      >
        إرسال
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

// بيانات النموذج
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// رسائل الأخطاء
const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// دالة التحقق والإرسال
function handleSubmit() {
  // تصفير الأخطاء
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = 'الاسم مطلوب'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'البريد الإلكتروني مطلوب'
    valid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'البريد الإلكتروني غير صالح'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'الرسالة مطلوبة'
    valid = false
  }

  if (valid) {
    // تخزين البيانات في localStorage
    const savedData = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    savedData.push({
      name: form.name,
      email: form.email,
      message: form.message,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('contactMessages', JSON.stringify(savedData))

    alert('تم إرسال النموذج وحفظه بنجاح ✅')

    // تفريغ النموذج
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>
