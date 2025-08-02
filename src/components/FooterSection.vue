<template>
    <div class="bg-[#003366] rounded-lg shadow-md p-4 transition-transform hover:-translate-y-1">
        <h2 class="text-[#ffcc00] text-lg mb-2">{{ title }}</h2>
        <ul class="space-y-2">
            <li v-for="(link, index) in links" :key="index">
                <a :href="link.url" class="hover:text-[#ffcc00]">{{ link.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    links: Array
})
</script>
