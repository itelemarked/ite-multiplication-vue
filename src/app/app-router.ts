import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomeView from './Home/HomePage.vue';

import Training from './Training/Training.page.vue';
import Testing from './@Testing/Testing.vue';
import TrainingSetup from './Training/TrainingSetup.page.vue';


const ROOT = '/home';

const routes = [
  { path: '/', redirect: ROOT },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/training', component: Training, children: [
    { path: '/training', redirect: '/training/setup' },
    { path: '/training/setup', name: 'setup', component: TrainingSetup }
  ] },
  { path: '/@testing', name: '@testing', component: Testing },
  { path: '/:catchAll(.*)', redirect: ROOT }
  // { path: '/about', name: 'about', component: () => import('./pages/AboutView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
