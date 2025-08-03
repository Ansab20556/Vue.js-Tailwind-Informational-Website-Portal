<!-- ملف الهيدر الرئيسي -->
<template>
    <header class="text-white top-0 z-50 ">
        <nav :class="theme === 'dark' ? 'dark' : 'light'" class="bg-[#007dbc] dark:bg-gray-900 dark:text-white p-4 flex flex-wrap items-center justify-between  ">
            <div class="flex items-center justify-between w-full md:w-auto">
                <Logo />
                <Hamburger @toggle="toggleMenu" />
            </div>
        <div :class="{'flex w-full flex-col items-center text-center space-y-2 mt-4 md:mt-0 md:flex md:flex-row md:space-y-0 md:space-x-4 md:w-auto':true,
        hidden: !menuOpen,
        }">
        <NavLinks @linkClicked="closeMenu" />
        <br />
        <LoginButton @clicked="closeMenu" />
        
    </div>
    </nav>
    </header>
</template>

<script setup>
import Logo from './Logo.vue'
import Hamburger from './Hamburger.vue'
import NavLinks from './NavLinks.vue'
import LoginButton from './LoginButton.vue'

import { ref, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme() {
  localStorage.setItem('theme', theme.value)
  console.log(theme.value)
}

onMounted(() => {
  applyTheme()
})

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}


</script>
<style>

/* الوضع الداكن */
.dark {
  background-color: #1f2937;
  color: #f9fafb; 
}
</style>