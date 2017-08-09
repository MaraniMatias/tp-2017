/*
 * VueJS y plugin generales.
 */
import './index.less';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(Vuex);
Vue.use(VueRouter);
import store from './store';
/*
 * Componetes
 */
import AppVuex from './components/vuex.vue';
import Hello from './components/Hello.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: Hello
    }
  }, {
    path: '/vuex',
    components: {
      default: AppVuex
    }
  }]
});
/*
 * Construye la app apartir del elemento con id root.
 */
export default new Vue({
  el: '#root',
  router,
  store: new Vuex.Store(store),
  render: h => h('router-view')
});
