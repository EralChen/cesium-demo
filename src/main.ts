import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import './styles'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(store)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
