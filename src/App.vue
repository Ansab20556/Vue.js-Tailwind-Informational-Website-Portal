<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
const route = useRoute()
</script>

<template>
  <div>
    <!--  إخفاء الهيدر فقط في صفحة dashboard -->
    <Header v-if="route.path !== '/dashboard'" />

    <!-- باقي الصفحات -->
    
    <router-view />
  </div>
</template>
