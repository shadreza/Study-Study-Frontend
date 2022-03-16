<template>
  <div id="app">
    <NavComponent/>
    <router-view />
    <footer class="footer">
      <p class="has-text-centered">Copyright 2022 @ Shad Reza</p>
    </footer>
  </div>
</template>

<script>
  import NavComponent from './components/NavComponent.vue'
  export default {
    name : 'App',
    components : {
      NavComponent,
    },
  }
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>