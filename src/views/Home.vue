<template>
    <HeroSection
        :background="heroImage"
        title='<mark class="bg-yellow-200 text-black dark:bg-amber-700 dark:text-white">تقرير للأمم المتحدة </mark> تفاقم الجوع في 13 بؤرة ساخنة..<br /> وخطر الموت جوعاً يهدد خمساً منها'
        :buttons="[
        { text: 'تبرع الآن', href: '/donate' },
        { text: 'اقرأ المزيد', href: '#' }
        ]"
    />

    <main class="p-6">
        <ArticlesSection />
        <ContactForm/>
        <MapSection></MapSection>

    </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import heroImage from '../assets/images/WF11017230 20250319_SDN_Abubakar-Garelnabei_0012_0.jpg'
import ArticlesSection from '../components/ArticlesSection.vue'
import ContactForm from '../components/ContactForm.vue'
import MapSection from '@/components/MapSection.vue'



</script>
