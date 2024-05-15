

import { createApp } from 'vue'
import App from './components/app/App.vue';
import router from '../src/router.js' // Путь к вашему файлу с маршрутами

createApp(App).use(router).mount('#app')
