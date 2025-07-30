<!-- هذا الملف لروابط التنقل -->
<template>
  <ul class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
    <li><router-link to="/" class="me-4 hover:text-yellow-300">الرئيسية</router-link></li>
    <li><router-link to="/about" class="p-4 me-4 hover:text-yellow-300">من نحن</router-link></li>
    <li><router-link to="/work" class="p-4 me-4 hover:text-yellow-300">عملنا</router-link></li>
    <li><router-link to="/donate" class="p-4 me-4 hover:text-yellow-300">تبرع الان</router-link></li>
  </ul>
</template>

