// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#gank-content',
  router,
  components: { App },
  template: '<App/>'
})
