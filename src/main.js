import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mint-ui库
import './css/mint-ui.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// mui
import './lib/mui/css/mui.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
