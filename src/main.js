import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Tab, Tabs } from 'vant';
import './assets/global.css'
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);

Vue.use(Button);
Vue.config.productionTip = false


new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
