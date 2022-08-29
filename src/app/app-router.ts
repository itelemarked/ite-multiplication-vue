import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TrainingPage from './pages/TrainingPage.vue';
import HomeView from './pages/HomePage.vue';

const ROOT = '/home';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: ROOT },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/training', name: 'training', component: TrainingPage },
  { path: '/:catchAll(.*)', redirect: ROOT }
  // { path: '/about', name: 'about', component: () => import('./pages/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
