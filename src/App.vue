<template>
  <ThemeProvider :theme="theme">
    <div id="app">
      <router-view />
    </div>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";
import { dark } from "./styles/themes/dark";
export default {
  data: function() {
    return {
      theme: dark
    };
  },
  components: {
    ThemeProvider
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  color: #fff;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
