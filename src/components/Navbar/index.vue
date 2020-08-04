<template>
  <Navbar>Login </Navbar>
</template>

<script lang="ts">
import { Nav } from "./styles";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Nav
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="sass"></style>
