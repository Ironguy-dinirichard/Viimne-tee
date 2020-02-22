import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from "../i18n"

// import Contact from '../components/Contact.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path:"/:lang",
    component: {
      render (c) { return c("router-view") }
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: HelloWorld
      },
      {
        path: 'Kontact',
        name: 'Kontact',
        // component: Contact,
        meta: { scrollToTop: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue')
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
