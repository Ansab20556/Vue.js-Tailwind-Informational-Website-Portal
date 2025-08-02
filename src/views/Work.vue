<template>
    <HeroSection
        :background="heroImage"
        title='<mark class="bg-yellow-200 text-black text-2xl font-bold">عملنا </mark><br /> برنامج الاغذية العالمي للأمم المتحدة '>
    </HeroSection>

    <div class="p-6 space-y-10">
        <IntroBlock :paragraphs="intro" />
        <div class="flex flex-col lg:flex-row gap-6">
        <SidebarNav :items="sections" />
        <div class="w-full lg:w-3/4 space-y-6">
            <SectionBlock
            v-for="section in sections"
            :key="section.id"
            :id="section.id"
            :title="section.title"
            :paragraphs="section.paragraphs"
            />
        </div>
        </div>
    </div>

    <WorkList />
</template>

<script setup>
    import HeroSection from '../components/HeroSection.vue'
    import heroImage from '../assets/images/WF121663_UGA_20200707_WFP-Hugh_Rutherford_5079.jpg'
    import IntroBlock from '@/components/IntroBlock.vue'
    import SectionBlock from '@/components/SectionBlock.vue'
    import SidebarNav from '@/components/SidebarNav.vue'
    import { initWorkData } from '@/data/workData';


    const intro = [
    'برنامج الأغذية العالمي يعمل في أكثر من 120 دولة لدعم المجتمعات المحتاجة وتقديم المساعدات الإنسانية، مع التركيز على بناء القدرة على الصمود.',
    'نحن نساعد الحكومات على التخفيف من آثار الكوارث والصدمات المناخية، ونعزز سبل العيش المستدامة لضمان الأمن الغذائي للجميع.'
    ]

    const sections = [
    {
        id: 'section1',
        title: 'نحن نمنع ونحارب الجوع',
        paragraphs: [
        'نقدم المساعدات الطارئة للأشخاص في حالات النزاع والكوارث، من خلال الغذاء أو المساعدات النقدية، لتأمين احتياجاتهم الأساسية.',
        'نستخدم نظم الإنذار المبكر والطائرات بدون طيار لتقييم الأضرار وتحسين استجابتنا السريعة للكوارث.'
        ]
    },
    {
        id: 'section2',
        title: 'نواجه الصدمات المناخية',
        paragraphs: [
        'ندعم المجتمعات في التكيف مع التغيرات المناخية من خلال مشاريع مستدامة في الزراعة والمياه والطاقة المتجددة.',
        'نواجه تحديات سوء التغذية من خلال دعم النظم الغذائية الصحية وتوفير برامج تغذية للأطفال والنساء.'
        ]
    },
    {
        id: 'section3',
        title: 'نعزز الاقتصادات وأنظمة الغذاء',
        paragraphs: [
        'ندعم المزارعين المحليين من خلال سلاسل التوريد ونوفر الدعم الفني والمالي لهم.',
        'نقدم مساعدات نقدية تعزز من قدرة المجتمعات على شراء الغذاء محليًا وتنشيط الأسواق.'
        ]
    },
    {
        id: 'section4',
        title: 'نستغل الابتكار والتكنولوجيا',
        paragraphs: [
        'نستخدم التقنيات الحديثة مثل البلوك تشين والذكاء الاصطناعي لتحسين توزيع المساعدات وزيادة الكفاءة.',
        'نبتكر حلولًا محلية ذكية بالتعاون مع الشركاء لتحسين الأمن الغذائي ومواجهة التحديات المتغيرة.'
        ]
    }
    ]


    initWorkData();
    
</script>

<script>
import WorkList from "@/components/WorkList.vue";
export default {
  components: { WorkList }
};
</script>
