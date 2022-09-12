import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/app-router';
import { IonicVue } from '@ionic/vue';
import { mediaService } from './js/mediaService';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});

console.log(mediaService.cssClass.value)
