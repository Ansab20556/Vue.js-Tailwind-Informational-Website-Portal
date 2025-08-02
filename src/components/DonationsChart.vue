<!-- components/DonationsChart.vue -->
<template>
    <div class="bg-white p-4 rounded-xl shadow mt-6">
        <h2 class="text-lg font-semibold mb-4">مخطط التبرعات لكل شهر</h2>
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

// تسجيل جميع العناصر
Chart.register(...registerables)

const chartCanvas = ref(null)
let chartInstance = null

onMounted(() => {
    const donations = JSON.parse(localStorage.getItem('donations') || '[]')
    // تنظيم التبرعات حسب الأشهر
    const donationsByMonth = Array(12).fill(0)

    donations.forEach(donation => {
        const date = new Date(donation.date)
        const month = date.getMonth() // 0 => يناير، 1 => فبراير...
        donationsByMonth[month] += Number(donation.amount)
    })

    const ctx = chartCanvas.value.getContext('2d')

    if (chartInstance) {
        chartInstance.destroy()
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: [
            'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
            'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ],
        datasets: [{
            label: 'إجمالي التبرعات (بالعملة المحلية)',
            data: donationsByMonth,
            backgroundColor: '#3b82f6'
        }]
        },
        options: {
        responsive: true,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    })
})
</script>
