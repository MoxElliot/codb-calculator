import { createRouter, createWebHistory } from 'vue-router'
import stepsArray from '../assets/stepsArray'
import Cobd from '../components/views/Cobd.vue'

const routes = [
  {
    path: '/',
    component: Cobd,
    children: stepsArray.map((step) => ({
      path: <string>`${step.path}`,
      name: <string>`${step.name}`,
      component: () => import(`../components/StepComponents/${step.name.replace(/\s/g, '')}.vue`) //Regex to remove all whitespace
    }))
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
