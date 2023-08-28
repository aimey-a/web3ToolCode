import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import web3 from 'web3'
import * as ethers from 'ethers'

Vue.prototype.$web3 = web3
Vue.prototype.$ethers = ethers

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
