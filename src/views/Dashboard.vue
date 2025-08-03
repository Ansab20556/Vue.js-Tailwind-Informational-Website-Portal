<!-- src/pages/Dashboard.vue -->
<template>
    <div class="flex flex-col md:flex-row min-h-screen relative">
        <!-- زر القائمة (للجوال فقط) -->
        <button
        class="md:hidden px-1 text-2xl fixed top-2 right-2 z-50 bg-gray-800 text-white rounded shadow hover:cursor-pointer"
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
import DashboardWork from '@/components/DashboardWork.vue';
import DonationsTable from '@/components/DonationsTable.vue'
import Settings from '@/components/Settings.vue'



const sidebarOpen = ref(false)
const section = ref('dashboardhome')

function navigate(target) {
    section.value = target
    sidebarOpen.value = false
}

const currentComponent = computed(() => {
    switch (section.value) {
        case 'dashboardhome':
            return DashboardHome
        case 'messages':
            return MessagesTable
        case 'projects':
            return DashboardWork
        case 'news':
            return DonationsTable
        case 'events':
            return EventsSection
        case 'settings':
            return Settings
        case 'users':
            return UsersSection
        default:
            return DashboardHome
    }
})
</script>
