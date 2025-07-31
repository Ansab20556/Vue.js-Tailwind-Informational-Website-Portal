<!-- ArticlesSection.vue -->
<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ArticleCard
            v-for="(article, index) in articles"
            :key="index"
            :image="article.image"
            :alt="article.alt"
            :title="article.title"
            :category="article.category"
            :link="article.link"/>
  </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png'

const articles = [
  {
    image: Image1,
    alt: 'صورة 1',
    title: 'بيان بشأن حادث قافلة شمال غزة',
    category: 'بيانات صحفية',
    link: '#'
  },
  {
    image:Image2 ,
    alt: 'صورة 2',
    title: 'الحرب في أوكرانيا: كيف يساعد البرنامج صغار المزارعين',
    category: 'قصة',
    link: '#'
  },
  {
    image: Image3,
    alt: 'صورة 3',
    title: 'اللاجئون الفارون من السودان يواجهون تفاقم الجوع',
    category: 'بيانات صحفية',
    link: '#'
  }
]
</script>
