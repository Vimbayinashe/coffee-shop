import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  watch: {
    '$route'(to) {
      document.title = to.meta.title 
    }
  },
  store,
  render: h => h(App)
}).$mount('#app')