import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Add from '@/views/admin/Add'
import Article from '@/views/Article'
import NotFound404 from '@/views/NotFound404'
//view 和 components 資料夾差別在於 view 內裝的是 router 轉的“頁面”; 而 components 是可拼貼在view上的元件

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
    component: About
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/',
        name: 'Admin-Home',
        component: Admin
      },
      {
        path: 'add',
        name: 'Admin-Add',
        component: Add
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound404',
    component: NotFound404
  }
]

const router = new VueRouter({
  routes
})

export default router
