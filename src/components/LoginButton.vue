<!-- زر تسجيل الدخول لصفحة التحكم -->
<template>
    <router-link
        to="/dashboard"
        @click="$emit('clicked')"
        class="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition duration-300">
        تسجيل الدخول
    </router-link>
</template>

