import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/app-router'
import { IonicVue } from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router)

router.isReady().then(() => {
  app.mount('#app');
});
