import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/router';
// import './assets/main.css';
import "./assets/main.css"


const app = createApp(App);

app.use(router)
app.use(createPinia())
app.mount('#app')
