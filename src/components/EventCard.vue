<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
    <div class="event-card -shadow col-md-3 col-sm-6 col-xs-12 appGrp">
      <!-- <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>-->
      <!-- <BaseIcon name="users">{{ event.attendees }} attending</BaseIcon> -->
      <div class="appGrpBox">
        <ul>
          <li>
            <img v-bind:src="event.icon" />
          </li>
          <li>
            <h4>{{ event.appName}}</h4>
            <em>{{ event.memberName}}</em>
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
    return {
      publicPath: process.env.BASE_URL
    };
  },
  props: {
    event: Object
  }
};
</script>

<style scoped>
/*...*/
</style>