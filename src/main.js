// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Left from './components/Left'
import Right from './components/Right'
import router from './router'

Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#header',
  router,
  components: { AppHeader },
  template: '<app-header/>'
})
new Vue({
  el: '#footer',
  router,
  components: { AppFooter },
  template: '<app-footer/>'
})
new Vue({
  el: '#left',
  router,
  components: { Left },
  template: '<left/>'
})
new Vue({
  el: '#right',
  router,
  components: { Right },
  template: '<right/>'
})
