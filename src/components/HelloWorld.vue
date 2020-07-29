<template>
  <div class="hello">
    <ul v-if="searchFrontData">
      <li
        v-for="{ snippet, etag, id: { videoId } } in searchFrontData"
        :key="etag"
      >
        <a :href="videoId"></a>{{ snippet.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld extends Vue {
  private searchFrontData: Array<object> = [];
  mounted() {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: process.env.VUE_APP_YOUTUBE_API_KEY,
          part: "snippet",
          q: "front-end",
          maxResults: 20
        }
      })
      .then(({ data }) => {
        data.items.forEach((item: object) => {
          this.searchFrontData.push(item);
        });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
