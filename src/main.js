import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//import vutify from 'vuetify'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

// import sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify({rtl: true,}),
  render: h => h(App)
}).$mount('#app')
