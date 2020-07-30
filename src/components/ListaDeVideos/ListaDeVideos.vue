<template>
  <ListaContainer
    class="container"
    :style="
      backgroundURL(
        this.listVideo().data[this.positionVideo].snippet.thumbnails.high.url,
        'banner'
      )
    "
  >
    <Lista :style="positionLeft()">
      <Video
        v-for="({
          snippet: {
            title,
            thumbnails: {
              high: { url }
            }
          },
          etag,
          id: { videoId }
        },
        index) in listVideo().data"
        :key="etag"
        v-on:click="openVideo(videoId)"
        :style="backgroundURL(url, 'teaser', index)"
      >
      </Video>
    </Lista>
    <button v-on:click="voltarCarrousel()">Voltar</button>
    <button v-on:click="proximoCarrousel()">Proximo</button>
  </ListaContainer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Lista, Video, ListaContainer } from "./styles";

@Component({
  components: {
    Lista,
    Video,
    ListaContainer
  }
})
export default class ListaDeVideos extends Vue {
  private loading = false;
  private positionVideo = 0;
  listVideo() {
    return this.$store.state.listVideo.data;
  }
  backgroundURL(url: string, type: string, index: number) {
    //Caso queira maior qualidade "maxresdefault"
    //Caso seja menor "sddefault"
    if (type === "teaser") {
      return `background-image:url(${url});${index === this.positionVideo &&
        "border:1.5px solid blue;"}`;
    }
    return `background-image:url(${url.replace(
      "hqdefault",
      "maxresdefault"
    )});`;
  }

  positionLeft() {
    return `left:calc(-${
      this.positionVideo < 15
        ? this.positionVideo
        : this.positionVideo > 19 && (this.positionVideo = 0)
    } * 200px);`;
  }
  voltarCarrousel() {
    this.positionVideo -= 1;
  }
  proximoCarrousel() {
    this.positionVideo += 1;
  }
  mounted() {
    this.$store.commit("listVideosYoutube");
  }
  openVideo(videoId: string): void {
    this.$store.commit("addEmbedVideo", videoId);
  }
}
</script>
