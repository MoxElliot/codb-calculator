import { createRouter, createWebHashHistory } from 'vue-router'
import stepsArray from '../assets/stepsArray'

const routes = stepsArray.map((step) =>
  step.path === '/'
    ? {
        path: <string>`${step.path}`,
        name: <string>`${step.name}`,
        component: <any>`${step.name}`
      }
    : {
        path: <string>`${step.path}`,
        name: <string>`${step.name}`,
        component: () => import(`../components/views/${step.name.replace(/\s/g, '')}.vue`) //Regex to remove all whitespace
      }
)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
