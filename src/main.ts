import Vue, { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router/index'
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'

const app = createApp(App)
app.use(router)
app.use(SfVueAnimatedCursor, { basic: true })
app.mount('#app')
