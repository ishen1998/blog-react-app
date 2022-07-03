import {
  lazy
} from 'react'
const Welcome = lazy(() => import('../views/welcome'))
const Home = lazy(() => import('../views/home'))
const Category = lazy(() => import('../views/category'))
const About = lazy(() => import('../views/about'))
const Detail = lazy(() => import('../views/detail'))
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/welcome',
    component: Welcome
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/about',
    component: About
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]