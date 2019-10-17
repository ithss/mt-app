import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/layout/MainPage'
import Login from '@/components/Login'
// import Register from '@/components/Register'
// import FindPassword from '@/components/FindPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // children: [
    //     {
    //       path: '/login/register',
    //       name: 'register',
    //       component: Register
    //     },
    //     {
    //       path: '/login/findPassword',
    //       name: 'findPassword',
    //       component: FindPassword
    //     }
    //   ]
    }
  ]
})
