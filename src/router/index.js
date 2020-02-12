import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz-example',
    name: 'quiz-example',
    component: () => import('../views/QuizExample')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
