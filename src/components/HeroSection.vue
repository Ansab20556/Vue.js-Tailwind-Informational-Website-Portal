<!-- قسم الهيرو -->
<template>
    <section class="relative w-full max-h-[500px] overflow-hidden">
        <img :src="background" alt="صورة رئيسية" class="w-full object-cover" />
        
        <div class="absolute top-1/2 right-6 text-white text-right">
            <h1 class="text-sm md:text-2xl font-bold mt-40" v-html="title"></h1>
            
            <div class="flex flex-wrap gap-3">
                <a
                v-for="(btn, index) in buttons"
                :key="index"
                :href="btn.href"
                class="bg-[#007dbc] px-6 py-2 rounded-full hover:bg-[#005f91]">
                {{ btn.text }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    background: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    buttons: {
        type: Array,
        default: () => [],
    },
})
</script>
