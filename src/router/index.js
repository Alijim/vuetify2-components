import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Option from '../views/Option.vue'
import Components from '../views/Components.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/option',
    name : "Option",
    component : Option
  }, 
  {
    path: '/components',
    name: "Components",
    component : Components
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
