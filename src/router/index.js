import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import SignUpView from '../views/SignUpView'
import LogInView from '../views/LogInView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path      : '/about',
    name      : 'AboutView',
    component : AboutView
  },
  {
    path      : '/signup',
    name      : 'SignUpView',
    component : SignUpView
  },
  {
    path      : '/login',
    name      : 'LogInView',
    component : LogInView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
