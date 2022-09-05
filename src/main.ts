import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/app-router';
import { IonicVue } from '@ionic/vue';

// STYLES
import '@/styles/ionic-core.css';
import '@/styles/ionic-colors.css';
import '@/styles/styles.css';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
