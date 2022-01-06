import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from './components/base/no-result/directive'
import lazyPlugin from 'vue3-lazy'

import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).directive('loading', loadingDirective).directive('no-result', noResultDirective).use(lazyPlugin, {
  loading: require('@/assets/images/default.png'),
  error: require('@/assets/images/error.png')
}).mount('#app')
