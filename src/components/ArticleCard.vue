<!-- كرت المقالات -->
<template>
    <a :href="link"
        class="bg-white rounded shadow hover:-translate-y-1 duration-300 dark:bg-gray-800">

        <img :src="image" :alt="alt" class="rounded-t w-full" />
        <div class="p-4">
        <h3 class="font-bold text-lg mb-1">{{ title }}</h3>
        <p v-if="category" class="text-sm text-gray-600 dark:text-gray-300">{{ category }}</p>
        </div>
    </a>
</template>

<script setup>
defineProps({
    image: String,
    alt: String,
    title: String,
    category: String,
    link: {
        type: String,
        default: "#"
    }
})
</script>
