import { createApp } from 'vue'
import router from './router/index';
import BaseButton from './components/UI/BaseButton.vue';
import BaseInput from './components/UI/BaseInput.vue';

import App from './App.vue'
import './index.css'

createApp(App)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .use(router)
  .mount('#app');
