// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
<<<<<<< HEAD
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
=======
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
>>>>>>> origin/index-icons
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
<<<<<<< HEAD
Vue.use(VueAwesomeSwiper)
=======
Vue.use(VueAwesomeSwiper /* { default global options } */)
>>>>>>> origin/index-icons

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
