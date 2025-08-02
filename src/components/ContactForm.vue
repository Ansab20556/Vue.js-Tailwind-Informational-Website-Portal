<template>
  <!-- لعمل فورم للتواصل -->
  <section class="max-w-2xl mx-auto bg-white p-6 rounded shadow my-8 lg:mr-[270px] dark:bg-gray-800">
    <h2 class="text-center text-2xl font-bold mb-4">تواصل معنا</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-bold mb-1">الاسم الكامل</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border border-gray-300 p-2 rounded"
        />
        <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</div>
      </div>

      <div>
        <label class="block font-bold mb-1">البريد الإلكتروني</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border border-gray-300 p-2 rounded"
        />
        <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>
      </div>

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

    <!-- ✅ التوست -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// البيانات
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// توست
const showToast = ref(false)
const toastMessage = ref('')

// التحقق والإرسال
function handleSubmit() {
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
    // تخزين البيانات
    const savedData = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    savedData.push({
      name: form.name,
      email: form.email,
      message: form.message,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('contactMessages', JSON.stringify(savedData))

    // عرض التوست
    toastMessage.value = '✅ تم إرسال النموذج بنجاح'
    showToast.value = true

    setTimeout(() => {
      showToast.value = false
    }, 3000)

    // تفريغ الحقول
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
