// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/ranking', component: Ranking }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
