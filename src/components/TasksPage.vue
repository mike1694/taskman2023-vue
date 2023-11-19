<template>
  Tasks

  <div
    v-for="item in computedTasks"
    :key="item.id"
  >
    {{ item.label }}
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data.js';
import { computed } from 'vue';

const dataStore = useDataStore();

const computedTasks = computed(() => {

  console.log(computedTasks.value, 'test')

  return dataStore.tasks
});
dataStore.getTasks();
</script>

<style scoped>

</style>
