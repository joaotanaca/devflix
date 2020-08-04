<template>
  <ListaContainer
    :style="
      backgroundURL(
        this.listVideo().data[this.positionVideo].snippet.thumbnails.high.url,
        'banner'
      )
    "
    v-if="this.listVideo().data"
  >
    <div class="container">
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
      <PreviousCarrousel v-on:click="voltarCarrousel()">
        <font-awesome-icon icon="chevron-left" />
      </PreviousCarrousel>
      <NextCarrousel v-on:click="proximoCarrousel()">
        <font-awesome-icon icon="chevron-right" />
      </NextCarrousel>
    </div>
  </ListaContainer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {
  Lista,
  Video,
  ListaContainer,
  PreviousCarrousel,
  NextCarrousel
} from "./styles";

@Component({
  components: {
    Lista,
    Video,
    ListaContainer,
    PreviousCarrousel,
    NextCarrousel
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
    return `left:calc(-${this.positionVideo} * 210px);`;
  }
  voltarCarrousel() {
    if (this.positionVideo === 0) this.positionVideo = 19;
    else this.positionVideo -= 1;
  }
  proximoCarrousel() {
    if (this.positionVideo === 19) return (this.positionVideo = 0);
    else return (this.positionVideo += 1);
  }
  mounted() {
    this.$store.commit("listVideosYoutube");
  }
  openVideo(videoId: string): void {
    this.$store.commit("addEmbedVideo", videoId);
  }
}
</script>
