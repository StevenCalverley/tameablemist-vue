import { createApp } from 'vue';
import router from './router/index';
import { registerComponents } from './components/UI/base';

import App from './App.vue';
import './index.css';

const app = createApp(App);
registerComponents(app);
app.use(router);
app.mount('#app');
