<template>
  <div class="home">
    <lista-de-videos />
    <template v-if="$store.state.embedVideo !== ''">
      <video-fullscreen />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VideoFullsreen from "../components/videoFullScreen.vue";
import ListaDeVideos from "../components/ListaDeVideos/ListaDeVideos.vue";

@Component({
  components: {
    "video-fullscreen": VideoFullsreen,
    "lista-de-videos": ListaDeVideos
  }
})
export default class Home extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
