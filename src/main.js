import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import vutify from 'vuetify'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify({rtl: true,}),
  render: h => h(App)
}).$mount('#app')
