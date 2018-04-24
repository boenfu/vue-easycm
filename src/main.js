import Vue from 'vue'
import App from './App.vue'
import VueEasyCm from './lib/index'
Vue.use(VueEasyCm)
new Vue({
  el: '#app',
  render: h => h(App)
})
