import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import lazyPlugin from 'vue3-lazy'

import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).directive('loading', loadingDirective).use(lazyPlugin, {
  loading: 'loading.png',
  error: 'error.png'
}).mount('#app')
