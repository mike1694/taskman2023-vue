import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from '@/components/TasksPage.vue'
import CreateTaskPage from '@/components/CreateTaskPage.vue'
import HistoryPage from '@/components/HistoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TASKS',
      component: TasksPage
    },
    {
      path: '/create',
      name: 'TASKS_CREATE',
      component: CreateTaskPage
    },
    {
      path: '/history',
      name: 'HISTORY',
      component: HistoryPage
    },
  ]
})

export default router
