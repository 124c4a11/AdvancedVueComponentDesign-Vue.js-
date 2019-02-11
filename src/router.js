import Vue from 'vue'
import Router from 'vue-router'
import SettingsForm from './views/SettingsForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'settings-form',
      component: SettingsForm
    }
  ]
})
