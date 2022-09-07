import { createRouter, createWebHistory } from '@ionic/vue-router';

import TrainingPage from './pages/TrainingPage.vue';
import HomeView from './pages/HomePage.vue';
import TestingVue from './@Testing/Testing.vue';
import TrainingProgressPage from './pages/TrainingProgressPage.vue';

const ROOT = '/home';

const routes = [
  { path: '/', redirect: ROOT },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/training', name: 'training', component: TrainingPage },
  { path: '/training/progress', name: 'training-progress', component: TrainingProgressPage },
  { path: '/@testing', name: '@testing', component: TestingVue },
  { path: '/:catchAll(.*)', redirect: ROOT }
  // { path: '/about', name: 'about', component: () => import('./pages/AboutView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
