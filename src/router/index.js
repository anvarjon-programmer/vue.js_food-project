
import FoodDetail from '@/views/FoodDetail.vue'
import Foods from '@/views/Foods.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home
    },
    {
      name:'Food',
      path:'/foods',
      component:Foods
    },
    {
      name:'FoodDetail',
      path:'/foods/:id',
      component:FoodDetail
    },
  ]
})

export default router
