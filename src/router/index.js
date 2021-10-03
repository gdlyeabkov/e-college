import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import Feedback from '../views/Feedback.vue'
import Teacher from '../views/Teacher.vue'
import Student from '../views/Student.vue'
import Entrant from '../views/Entrant.vue'
import MCK from '../views/MCK.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/mck',
    name: 'MCK',
    component: MCK
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/entrant',
    name: 'Entrant',
    component: Entrant
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
