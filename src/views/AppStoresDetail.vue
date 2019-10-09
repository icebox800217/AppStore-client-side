<template>
  <div class="app-stores-detail">
    <div class="containt">
      <h3 class="pageTit">商品明細</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
          <div class="appGrpBox">
            <img :src="`${publicPath}${post.icon}`" />
            <!-- {{post.icon}}
            {{ publicPath }} -->
          </div>
        </div>
        <div class="col-md-9 col-sm-6 col-xs-12 appDetail">
          <h3>{{ post.appName }}</h3>
          <label>{{ post.company }}</label>
          <div class="tag">
            <!-- <label v-for="tag in post.tags">{{tag}}</label> -->
            <!-- <EventCard v-for="post in posts" :key="post.id" :post="post" /> -->
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <i class="fa fa-star" style="font-size:12px"></i>
              <i class="fa fa-star" style="font-size:12px"></i>
              <i class="fa fa-star" style="font-size:12px"></i>
              <i class="fa fa-star" style="font-size:12px"></i>
              <i class="fa fa-star" style="font-size:12px"></i>
            </div>
          </div>
          <button class="btn btn-default">下載</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div id="ubea-hero" data-section="home">
            <div class="flexslider">
              <ul class="slides">
                <li>
                <img :src="`${publicPath}${post.img}`" />
                </li>
                <li>
                <img :src="`${publicPath}${post.img}`" />
                </li>
                <li>
                <img :src="`${publicPath}${post.img}`" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          {{ post.Introduction }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      post: {},
      publicPath: process.env.BASE_URL
    };
  },  
  computed: {
    posts (id) {
      console.log("storeDetail",this.$store.state.posts.id);
      return this.$store.state.posts.id
    }
  },
//   created() {
//     EventService.getEvent(this.id)
//       .then(response => {
//         this.post = response.data;
//         console.log("detailData--", response.data);
//       })
//       .catch(error => {
//         console.log("There was an error:", error.response);
//       });
//   },
//   created () {
//     this.loading = true
//     this.$store.dispatch('fetchPosts')
//       .then(posts => {
//           this.post = posts.data;
//         console.log("posts-detail---",posts.data);
//         this.loading = false
//       })
//   }
};
</script>