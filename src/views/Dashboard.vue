<!-- src/pages/Dashboard.vue -->
<template>
    <div class="flex flex-col md:flex-row min-h-screen relative">
        <!-- زر القائمة (للجوال فقط) -->
        <button
        class="md:hidden px-1 text-2xl fixed top-2 right-2 z-50 bg-gray-800 text-white rounded shadow"
        @click="sidebarOpen = true"
        >
        ☰
        </button>

        <!-- القائمة الجانبية -->
        <Sidebar 
        :isOpen="sidebarOpen"
        @close="sidebarOpen = false"
        @navigate="navigate"
        />

        <!-- المحتوى -->
        <div class="flex-1 bg-gray-100 p-4 mt-16 md:mt-0">
            <component :is="currentComponent" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import MessagesTable from '../components/MessagesTable.vue'
import DashboardHome from '@/components/DashboardHome.vue'

const sidebarOpen = ref(false)
const section = ref('messages')

function navigate(target) {
    section.value = target
    sidebarOpen.value = false // إغلاق القائمة عند الضغط على عنصر
}

const currentComponent = computed(() => {
    switch (section.value) {
        case 'dashboardhome':
        return DashboardHome
        case 'messages':
        return MessagesTable
        case 'settings':
        return {
            template: `<div class="text-center text-gray-600 mt-10">قسم الإعدادات تحت الإنشاء...</div>`
        }
        default:
        return MessagesTable
    }
})
</script>
