<template>
  <div>
  <a :href="$router.resolve({ name: 'event-show', params: { id: event.id } }).href">
  <!-- <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }"> -->
    <div class="event-card -shadow col-md-2 col-sm-3 col-xs-4 appGrp">
      <!-- <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>-->
      <!-- <BaseIcon name="users">{{ event.attendees }} attending</BaseIcon> -->
      <div class="appGrpBox">
        <ul>
          <li>
            <!-- C:\Lab\AppStore-backend\AppStore\storage\app\public\icon
            C:\Lab\AppStore-backend\AppStore\storage\app\public\icon -->
            <!-- /storage/icon/191013082742000000.png -->
            <!-- {{ event.appIcon }} -->
              <img :src="imgPath + event.appIcon" />
          </li>
          <li>
            <h4>{{ event.appName}}</h4>
            <!-- <em>{{ event.memberName}}</em> -->
          </li>
          <li>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='far fa-star'></i>
            <i class='far fa-star'></i>
          </li>
        </ul>
      </div>
    </div>
  <!-- </router-link> -->
  </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      imgPath: window.sessionStorage.imgPath,
      appIcon_src:this.event.appIcon
    };
  },
  props: {
    event: Object
  }
}
</script>

<style scoped>
/*...*/
</style>