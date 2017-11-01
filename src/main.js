// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
//引入vuex
import Vuex from 'vuex'
//引入elment-ui
import  ElementUi from 'element-ui'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
//使用vuex
Vue.use(Vuex);
//使用element-ui
Vue.use(ElementUi)
//创建一个vuex的实例
const store = new  Vuex.Store({
//  存放数据的地方
  state:{

  },
//  getter也是存放数据的地方，但是跟state的区别主要在于getter用于存放计算后的结果
  getter:{

  },
  //用于改变状态的地方
  mutations:{

  },
  //也是用于改变状态的地方，通常用于异步的
  actions:{

  },
  //模块
  module:{

  },

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//VueX
  template: '<App/>',
  components: { App },
  render:h => h(App)
})
