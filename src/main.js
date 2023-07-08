// main.js 設定檔
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/all.scss'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
// VUE LOADING
// import { LoadingPlugin } from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/css/index.css'

import 'sweetalert2/dist/sweetalert2.min.css'
import 'hover.css/css/hover-min.css'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'material-icons/iconfont/material-icons.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCheckCircle, faCheck, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

// firebase
// /* add icons to the library */
library.add(faUserSecret, faCheckCircle, faCheck, faExclamationTriangle, faSpinner)
// library.add(far)

const app = createApp(App)
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
const pinia = createPinia()

// 設定預設語系
setLocale('zh_TW')
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
// LOADING
// app.use(LoadingPlugin, {
//   color: '#d04740',
//   loader: 'dots'
// })
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
app.use(pinia)
