import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TrainingPage from './training/TrainingPage.vue';
import HomeView from './home/HomeView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: 'home' },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/training', name: 'training', component: TrainingPage },
  { path: '/about', name: 'about', component: () => import('./about/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
