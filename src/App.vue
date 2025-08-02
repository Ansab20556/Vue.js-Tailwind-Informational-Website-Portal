<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
const route = useRoute()
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
