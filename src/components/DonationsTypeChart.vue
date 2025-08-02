<template>
  <div class="bg-gradient-to-br from-white via-gray-50 to-white p-6 rounded-3xl shadow-xl mt-6 w-full max-w-xl mx-auto">
    <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
      <span class="text-2xl">📊</span> نسبة التبرعات حسب النوع
    </h2>
    <div class="flex justify-center items-center h-60">
      <canvas ref="pieChartCanvas" class="max-h-full max-w-full" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const pieChartCanvas = ref(null)
let chartInstance = null

onMounted(() => {
  const donations = JSON.parse(localStorage.getItem('donations') || '[]')

  let once = 0
  let monthly = 0

  donations.forEach(d => {
    if (d.type === 'مرة واحدة') {
      once += Number(d.amount)
    } else if (d.type === 'شهري') {
      monthly += Number(d.amount)
    }
  })

  const ctx = pieChartCanvas.value.getContext('2d')

  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['مرة واحدة 💖', 'شهري 🔁'],
      datasets: [{
        data: [once, monthly],
        backgroundColor: ['#9951E1', '#FF33CC'],
        borderColor: '#fff',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#333',
            font: {
              size: 14,
              weight: '500',
            },
            padding: 16,
          }
        }
      }
    }
  })
})
</script>
