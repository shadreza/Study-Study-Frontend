<template>
  <div id="app">
    <NavComponent/>
    <router-view />
    <FooterComponent/>
  </div>
</template>

<script>
  import NavComponent from './components/NavComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
  export default {
    name : 'App',
    components : {
      NavComponent,
      FooterComponent,
    },
  }
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>