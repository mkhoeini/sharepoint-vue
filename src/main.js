// @flow
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import './assets/global.css'
import 'element-ui/lib/theme-default/index.css'

import App from './components/App'
import store from './store'

window.__disableNativeFetch = true
/* eslint-disable no-undef */
require('fetch-ie8')

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    store
})
