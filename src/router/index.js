import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import("@/components/tabbar/Home.vue")
const Category = ()=>import("@/components/tabbar/Category.vue")
const Cart = ()=>import("@/components/tabbar/Cart.vue")
const Personal = ()=>import("@/components/tabbar/Personal.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path:"/",
      redirect:"/home"
      
    }
  ]
})
