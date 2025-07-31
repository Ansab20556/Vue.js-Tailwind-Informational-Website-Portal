<!-- src/components/MessagesTable.vue -->
<template>
  <div class="p-6 w-full overflow-x-auto">
    <h2 class="text-2xl font-bold mb-4">الرسائل</h2>

    <div v-if="messages.length">
      <table class="min-w-full bg-white rounded shadow">
        <thead>
          <tr class="bg-gray-200 text-right">
            <th class="p-3">الاسم</th>
            <th class="p-3">البريد</th>
            <th class="p-3">الرسالة</th>
            <th class="p-3">إجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(msg, index) in messages" :key="index" class="border-t">
            <td class="p-3">{{ msg.name }}</td>
            <td class="p-3">{{ msg.email }}</td>
            <td class="p-3">{{ msg.message }}</td>
            <td class="p-3">
              <button @click="deleteMessage(index)" class="text-red-600 hover:underline">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        @click="clearMessages"
        class="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        حذف الكل
      </button>
    </div>
    <p v-else class="text-gray-600">لا توجد رسائل حالياً.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const messages = ref([])

onMounted(() => {
  const stored = localStorage.getItem('contactMessages')
  messages.value = stored ? JSON.parse(stored) : []
})

function deleteMessage(index) {
  messages.value.splice(index, 1)
  localStorage.setItem('contactMessages', JSON.stringify(messages.value))
}

function clearMessages() {
  messages.value = []
  localStorage.removeItem('contactMessages')
}
</script>
