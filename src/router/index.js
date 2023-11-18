import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WareHouse from '../views/WareHouse.vue'
import Skills from '../views/Skills.vue'
import MyLife from '../views/MyLife.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: WareHouse
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/mylife',
    name: 'mylife',
    component: MyLife
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
