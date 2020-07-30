<template>
  <div>
    <iframe :src="videoID()" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "VideoFullScreen"
})
export default class VideoFullscreen extends Vue {
  videoID() {
    return `https://www.youtube.com/embed/${this.$store.state.embedVideo}`;
  }
}
</script>

<style lang="scss" scoped></style>
