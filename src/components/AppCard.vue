<template>
  <router-link class="event-link" :to="{ name: 'app-stores-detail', params: { id: post.id } }">
    <div class="app-card -shadow col-md-3 col-sm-6 col-xs-12 appGrp">      
        {{ post.id }}
      <!-- <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>-->
      <!-- <BaseIcon name="users">{{ event.attendees }} attending</BaseIcon> -->
      <div class="appGrpBox">
        <ul>
          <li>
            <img v-bind:src="post.icon" />
          </li>
          <li>
            <h4>{{ post.appName}}</h4>
            <em>{{ post.memberName}}</em>
          </li>
          <li>
            <i class="fa fa-star" style="font-size:12px"></i>
            <i class="fa fa-star" style="font-size:12px"></i>
            <i class="fa fa-star" style="font-size:12px"></i>
            <i class="fa fa-star" style="font-size:12px"></i>
            <i class="fa fa-star" style="font-size:12px"></i>
          </li>
        </ul>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    console.log("baseURL--",process.env.BASE_URL)
    return {      
      publicPath: process.env.BASE_URL
    };
  },
  props: {
    post: Object
  }
};
</script>

<style scoped>
/*...*/
</style>