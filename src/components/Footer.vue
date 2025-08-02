<template>
    <footer class="bg-[#002244] text-white py-12 px-4 font-[Cairo] text-center rtl">
        <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-[#ffcc00]">المزيد من برنامج الأغذية العالمي</h2>
        </div>

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            <FooterSection title="حالات الطوارئ" :links="emergencies" />
            <FooterSection title="مناطق أخرى" :links="regions" />
            <FooterSection title="من نحن" :links="about" />
            <FooterSection title="عملنا" :links="work" />
            <FooterSection title="الموارد" :links="resources" />
            <FooterSection title="شاركنا" :links="engage" />
        </section>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 border-t border-white/20 mt-8 items-center">
            <div class="flex justify-center md:justify-start">
                <img src="../assets/images/WFB-LOGO.jpeg" alt="شعار برنامج الأغذية العالمي" class="w-30 h-24" />
            </div>

            <div class="flex flex-col items-center space-y-4">
                <ul class="flex flex-row gap-4">
                    <li v-for="(icon, index) in socialLinks" :key="index">
                        <a :href="icon.link" class="text-2xl hover:text-[#ffcc00]">
                        <i :class="icon.iconClass"></i>
                        </a>
                    </li>
                </ul>
                <p class="text-sm flex flex-wrap justify-center gap-2">
                <a href="#" class="hover:underline">إشعار الخصوصية</a>
                <span>|</span>
                <a href="#" class="hover:underline">الأحكام والشروط</a>
                <span>|</span>
                <a href="#" class="hover:underline">الأسئلة الشائعة</a>
                </p>
            </div>

            <div class="text-center md:text-left">
                <p>Via Cesare Giulio Viola, 68,<br />00148 Rome RM, Italy</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FooterSection from './FooterSection.vue'

const emergencies = [
    { text: "فلسطين", url: "https://ar.wfp.org/emergencies/palestine-emergency" },
    { text: "أفغانستان", url: "https://ar.wfp.org/emergencies/afghanistan-emergency" },
    { text: "أوكرانيا", url: "https://ar.wfp.org/emergencies/ukraine-emergency" },
    { text: "السودان", url: "https://ar.wfp.org/emergencies/sudan-emergency" },
    { text: "اليمن", url: "https://ar.wfp.org/emergencies/yemen-emergency" },
]

const regions = [
    { text: "سوريا", url: "https://ar.wfp.org/emergencies/syria-emergency" },
    { text: "لبنان", url: "https://ar.wfp.org/emergencies/lebanon" },
    { text: "نيجيريا", url: "https://ar.wfp.org/emergencies/nigeria-emergency" },
    { text: "هايتي", url: "https://ar.wfp.org/emergencies/haiti-emergency" },
    { text: "الصومال", url: "https://ar.wfp.org/emergencies/somalia-emergency" },
]

const about = [
    { text: "استراتيجية البرنامج", url: "#" },
    { text: "القيادة", url: "#" },
    { text: "التمويل والجهات المانحة", url: "#" },
    { text: "تاريخ البرنامج", url: "#" },
]

const work = [
    { text: "المساعدات النقدية والعينية", url: "#" },
    { text: "الإغاثة الطارئة", url: "#" },
    { text: "الدعم اللوجستي والإنساني", url: "#" },
    { text: "سلاسل الإمداد", url: "#" },
]

const resources = [
    { text: "الأخبار", url: "#" },
    { text: "القصص", url: "#" },
    { text: "المطبوعات", url: "#" },
    { text: "الفيديوهات", url: "#" },
]

const engage = [
    { text: "فرص العمل", url: "#" },
    { text: "كن شريكاً", url: "#" },
]

const socialLinks = [
    { iconClass: "fab fa-facebook-f", link: "#" },
    { iconClass: "fab fa-twitter", link: "#" },
    { iconClass: "fab fa-instagram", link: "#" },
    { iconClass: "fab fa-linkedin-in", link: "#" },
    { iconClass: "fab fa-youtube", link: "#" },
    { iconClass: "fab fa-tiktok", link: "#" },
]
</script>
