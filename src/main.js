import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 接口的解析的两张方法axios和vue-resource
// import axios from './axios'
// Vue.prototype.axios=axios;
import axios from 'axios'
Vue.prototype.axios=axios;
//定义全局请求头
axios.defaults.baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'

// import VueResource from './vue-resource'
// vue.use(VueResource)


//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

// mint-ui库
import './css/mint-ui.css'
  //按需引入hide组件 swipe组件
  // import { Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
  // Vue.component(Header.name, Header);
  // Vue.component(Swipe.name, Swipe);
  // Vue.component(SwipeItem.name, SwipeItem);
  // Vue.component(Button.name, Button);
  // Vue.use(Lazyload);
  //全部加载,按需引入mint-ui时，延时加载失效，需要吧mint-ui全部引入使用
  import mintui from 'mint-ui'
  Vue.use(mintui);



// mui库
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
