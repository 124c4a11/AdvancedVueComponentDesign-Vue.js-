import Vue from 'vue'
import Router from 'vue-router'
import SettingsForm from './views/SettingsForm.vue'
import DatePicker from './views/DatePicker.vue'
import AnnouncementModal from './views/AnnouncementModal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'settings-form',
      component: SettingsForm
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatePicker
    },
    {
      path: '/announcement-modal',
      name: 'announcement-modal',
      component: AnnouncementModal
    }
  ]
})
