import { createRouter, createWebHistory } from 'vue-router'

// جلب الصفحات
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Donate from '../views/Donate.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/work', name: 'Work', component: Work },
    { path: '/donate', name: 'Donate', component: Donate },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
