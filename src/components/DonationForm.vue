<template>
    <div class="p-6 max-w-3xl mx-auto bg-white shadow rounded-md py-6">
        <h2 class="text-2xl font-bold text-center mb-4 py-6">تبرع لمنظمتنا</h2>

        <div class="flex justify-center gap-4 mb-6">
            <button @click="activeForm = 'one'" :class="activeForm === 'one' ? activeBtnClass : inactiveBtnClass">تبرع مرة واحدة</button>
            <button @click="activeForm = 'monthly'" :class="activeForm === 'monthly' ? activeBtnClass : inactiveBtnClass">تبرع شهري</button>
        </div>

        <form v-if="activeForm === 'one'" @submit.prevent="submitOneTime" class="space-y-4">

            <h3 class="text-lg font-semibold p-4">تبرع مرة واحدة</h3>
            <input v-model.number="oneTimeAmount" type="number" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="أدخل المبلغ" required />
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">تبرع الآن</button>
        </form>

        <form v-if="activeForm === 'monthly'" @submit.prevent="submitMonthly" class="space-y-4">
            <h3 class="text-lg font-semibold">تبرعك الشهري</h3>

            <input v-model="monthly.country" type="text" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="الدولة" required />
            <input v-model="monthly.currency" type="text" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="العملة" required />

            <div class="space-y-2">
                <label v-for="amount in predefinedAmounts" :key="amount" class="flex items-center gap-2">
                    <input type="radio" v-model="monthly.amount" :value="amount" />
                    <span>{{ amount }}$</span>
                </label>
                <label class="block">
                <input type="radio" v-model="monthly.amount" value="other" /> مبلغ آخر
                <input v-if="monthly.amount === 'other'" v-model.number="monthly.otherAmount" type="number" class="w-full px-4 py-2 border border-gray-300 rounded mt-2" placeholder="أدخل المبلغ" />
                </label>
            </div>

            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">تبرع شهرياً</button>
        </form>

        <!-- Toast Notification -->
        <transition name="fade">
        <div
            v-if="showToast"
            class="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50 font-semibold select-none"
        >
            {{ toastMessage }}
        </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeForm = ref('one')
const oneTimeAmount = ref(0)
const monthly = reactive({
    country: '',
    currency: '',
    amount: 10,
    otherAmount: 0,
})
const predefinedAmounts = [10, 18, 27]

// Toast reactive vars
const showToast = ref(false)
const toastMessage = ref('')

const activeBtnClass = 'bg-blue-500 text-white px-4 py-2 rounded'
const inactiveBtnClass = 'bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200'

// دالة عرض التوست
function showSuccessToast(msg) {
    toastMessage.value = msg
    showToast.value = true
    setTimeout(() => {
        showToast.value = false
    }, 3000)
}

const submitOneTime = () => {
    if (!oneTimeAmount.value) return
    const donations = JSON.parse(localStorage.getItem('donations') || '[]')
    donations.push({
        type: 'مرة واحدة',
        amount: oneTimeAmount.value,
        date: new Date().toISOString(),
    })
    localStorage.setItem('donations', JSON.stringify(donations))
    oneTimeAmount.value = 0

     // عرض التوست بدلاً من alert
    showSuccessToast('تم التبرع بنجاح')
}

const submitMonthly = () => {
    const amount = monthly.amount === 'other' ? monthly.otherAmount : monthly.amount
    if (!monthly.country || !monthly.currency || !amount) return
    const donations = JSON.parse(localStorage.getItem('donations') || '[]')
    donations.push({
        type: 'شهري',
        country: monthly.country,
        currency: monthly.currency,
        amount,
        date: new Date().toISOString(),
    })
  localStorage.setItem('donations', JSON.stringify(donations))

  // إعادة تعيين الحقول بشكل صحيح:
  monthly.country = ''
  monthly.currency = ''
  monthly.amount = 10
  monthly.otherAmount = 0

  // عرض التوست بدلاً من alert
  showSuccessToast('تم التبرع بنجاح')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
