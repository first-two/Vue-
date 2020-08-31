import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 接口的解析的两张方法axios和vue-resource
// import axios from './axios'
// Vue.prototype.axios=axios;
import axios from 'axios'
Vue.prototype.axios=axios;

// import VueResource from './vue-resource'
// vue.use(VueResource)

// mint-ui库
import './css/mint-ui.css'
  //按需引入hide组件 swipe组件
  import { Header, Swipe, SwipeItem} from 'mint-ui';
  Vue.component(Header.name, Header);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);


// mui库
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
