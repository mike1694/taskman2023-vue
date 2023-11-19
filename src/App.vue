
<template>
  <header>
    <div class="app">
      <nav class="app__menu">
        <RouterLink to="/">Tasks</RouterLink>
        <RouterLink to="/create">Create task</RouterLink>
        <RouterLink to="/history">History</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app__menu {
  display: flex;
  gap: 12px;
}
</style>
