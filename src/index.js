import Vue from 'vue';
import Hello from './app/Hello.vue';

import './index.less';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Hello
      }
    }
  ]
});

/*
* ## Esporta algo
*/
export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});