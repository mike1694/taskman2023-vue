import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TaskItem } from './types';
import { fetcher } from '@/helpers/fetcher';

const BACKEND_URL = 'http://localhost:3000';
const TASKS_URL = BACKEND_URL + '/';

export const useDataStore = defineStore('dataStore', () => {
  const tasks = ref<TaskItem[]>([]);

  async function getTasks(): Promise<void> {
    try {
      const response = await fetcher<TaskItem[]>(TASKS_URL);

      tasks.value = response ?? [];
    } catch {
      throw Error('API error: getTasks');
    }
  };

  return {
    tasks,
    getTasks
  };
});
