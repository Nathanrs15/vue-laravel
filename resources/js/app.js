require('./bootstrap');

window.Vue = require('vue');

import App from './views/App'

import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue';
import VueAxios from 'vue-axios'

import VueAuth from '@websanova/vue-auth'
import auth from './auth'

import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { sync } from 'vuex-router-sync'

import store from './store/index'
import router from './router/index'
import './layouts/index'
import './plugins';


// Set Vue router
Vue.router = router
// Vue.use(VueRouter)
sync(store, router)

// Set Vue authentication
Vue.use(VueAxios, axios)
//axios.defaults.baseURL = `/api` //${process.env.MIX_APP_URL}
Vue.use(VueAuth, auth)

// Vue.use(Vuetify)

// Vue.component('App', App)

const app = new Vue({
    el: '#app',
    // components: { App },
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app');


