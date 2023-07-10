import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const app = createApp(App).use(router)
app.component('v-select', vSelect)

app.use(createPinia())

app.mount('#app')
