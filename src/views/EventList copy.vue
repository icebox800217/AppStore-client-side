<template>
  <div>
    <div class="containt">
      <div class="row">
        <div class="col-md-12 type-nav">
          <a>熱門</a> |
          <a>新品上架</a> |
          <a>家庭</a> |
          <a>遊戲</a> |
          <a>休閒</a> |
          <a>教育</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-6 col-xs-12">
          <h3 class="pageTit">最新熱門</h3>
          <div class="row">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
        </div>
      </div>
    </div>
    <div class="foot-nav"></div>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
        console.log("data---", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    
  }
};
</script>