import { createApp } from 'vue';
import router from './router/index';
import BaseButton from './components/UI/BaseButton.vue';
import BaseInput from './components/UI/BaseInput.vue';
import BaseRadio from './components/UI/BaseRadio.vue';
import BaseTextarea from './components/UI/BaseTextarea.vue';
import BaseSelect from './components/UI/BaseSelect.vue';
import BaseSelectMenu from './components/UI/BaseSelectMenu.vue';

import App from './App.vue';
import './index.css';

createApp(App)
  .component('BaseButton', BaseButton)
  .component('BaseInput', BaseInput)
  .component('BaseRadio', BaseRadio)
  .component('BaseTextarea', BaseTextarea)
  .component('BaseSelect', BaseSelect)
  .component('BaseSelectMenu', BaseSelectMenu)
  .use(router)
  .mount('#app');
