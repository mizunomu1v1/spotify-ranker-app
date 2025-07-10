import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // ここ追加！
import './style.css'

const app = createApp(App)
app.use(router) // これで Vue にルーターを登録！
app.mount('#app')