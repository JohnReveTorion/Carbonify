import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import HomeView from '@/views/auth/HomeView.vue'
import AboutView from '@/views/auth/AboutView.vue'
import TransactionView from '@/views/auth/TransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView,
    },

  ],
})

export default router
