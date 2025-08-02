<template>
    <HeroSection
        :background="heroImage"
        title='يرجى التبرع <mark class="bg-yellow-200 text-black text-2xl font-bold"> الآن </mark> <br /> يوفر كل تبرع الغذاء للأطفال والأسر الجوعى.'>
    </HeroSection>
    <DonationForm></DonationForm>

</template>
<script setup>
    import HeroSection from '../components/HeroSection.vue'
    import heroImage from '../assets/images/untitled-design.png'
    import DonationForm from '@/components/DonationForm.vue';
</script>
