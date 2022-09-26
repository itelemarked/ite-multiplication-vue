import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/app/components/HomePage.vue';
import TrainingPage from '@/app/components/TrainingPage.vue';
import Testing from '@/app/modules/@Testing/Testing.vue';


const ROOT = '/home';

const routes = [
  { path: '/', redirect: ROOT },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/training', component: TrainingPage },
  // { path: '/training', component: TrainingPage, children: [
  //   { path: '/training', redirect: '/training/setup' },
  //   { path: '/training/setup', name: 'setup', component: TrainingSetupPage }
  // ] },
  { path: '/@testing', name: '@testing', component: Testing },
  { path: '/:catchAll(.*)', redirect: ROOT }
  // { path: '/about', name: 'about', component: () => import('./pages/AboutView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
