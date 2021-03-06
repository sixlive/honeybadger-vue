// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HoneybadgerVue from '@/index.js'

const config = { apiKey: (process.env.HONEYBADGER_API_KEY || prompt('Enter the API key for your Honeybadger project:')) }
Vue.use(HoneybadgerVue, config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
