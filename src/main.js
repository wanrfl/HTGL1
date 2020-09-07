import Vue from 'vue'
import App from './App.vue'
import ElementUl from  "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import router from './router'
import store from './store'

console.log(process.env.VUE_APP_SERVICE_URL);

Vue.use(ElementUl)
Vue.config.productionTip = process.env.NODE_ENV=="production"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
