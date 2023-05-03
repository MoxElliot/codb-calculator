import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from './router'

const app = createApp(App).use(router)

app.use(createPinia())

app.mount('#app')
