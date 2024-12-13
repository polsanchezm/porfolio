import './assets/index.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import en from './assets/locales/en.json'
import es from './assets/locales/es.json'
import ca from './assets/locales/ca.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    ca,
  },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
