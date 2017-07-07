import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Movie from '@/view/Movie'
import Book from '@/view/Book'
import Status from '@/view/Status'
import Group from '@/view/Group'
import Subject from '@/view/Subject'
import Register from '@/view/Register'
import Login from '@/view/Login'
import Search from '@/view/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
     {
      path: '/book',
      name: 'Book',
      component: Book
    },
     {
      path: '/status',
      name: 'Status',
      component: Status
    },
     {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/:classify/subject/:id',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
