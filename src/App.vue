<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
const route = useRoute()

import { onMounted } from 'vue'

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

</script>

<template>
  <div>
    <!--  إخفاء الهيدر فقط في صفحة dashboard -->
    <Header v-if="route.path !== '/dashboard'" />

    <!-- باقي الصفحات -->
    
    <router-view />
  </div>

      <Footer v-if="route.path !== '/dashboard'"  />
  

</template>
