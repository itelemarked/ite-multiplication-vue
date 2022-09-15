import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import App from './app/App.vue';
import router from './app/app-router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});

