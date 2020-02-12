<template>
  <div id="app">
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter";

export default {
  components: {
    AppFooter
  }
};
</script>
<style lang="scss">
body {
  background: #f5f5f5;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
