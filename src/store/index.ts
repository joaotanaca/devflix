import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    embedVideo: "",
    listVideo: {
      data: Array<object>()
    }
  },
  mutations: {
    addEmbedVideo(state, videoId) {
      state.embedVideo = videoId;
    },
    listVideosYoutube(state) {
      if (!localStorage.getItem("videos")) {
        axios
          .get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: process.env.VUE_APP_YOUTUBE_API_KEY_DEV,
              part: "snippet",
              q: "front-end",
              maxResults: 20
            }
          })
          .then(({ data }) => {
            data.items.forEach((item: object) => {
              state.listVideo.data.push({ ...item });
            });
            localStorage.setItem("videos", JSON.stringify(state.listVideo));
            const videosData = JSON.parse(
              localStorage.getItem("videos") || "[]"
            );
            state.listVideo.data = videosData;
          });
      } else {
        const videosData = JSON.parse(localStorage.getItem("videos") || "[]");
        state.listVideo.data = videosData;
      }
    }
  },
  actions: {
    addEmbedVideo({ commit }) {
      commit("addEmbedVideo");
    },
    listVideosYoutube({ commit }) {
      commit("listVideosYoutube");
    }
  },
  modules: {}
});
