import Vue from 'vue'
import App from './App.vue'
import VMask from "v-mask"

Vue.use(VMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
