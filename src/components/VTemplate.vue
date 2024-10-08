<script lang="ts">
  export default{
    name: 'VTemplate',
  };
</script>

<template>
  <div class="layout">
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<style scoped>
  .layout{
    direction: flex;
    flex-direction: column;
  }

  header footer{
    background-color: green;
  }
</style>
