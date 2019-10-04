<template>
  <div>
    <!-- <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>-->
    <div class="containt">
      <h3 class="pageTit">商品明細</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
          <div class="appGrpBox">
            <img :src="`${publicPath}${event.icon}`" />
            <!-- {{event.icon}}
            {{ publicPath }} -->
          </div>
        </div>
        <div class="col-md-9 col-sm-6 col-xs-12 appDetail">
          <h3>{{ event.appName }}</h3>
          <label>{{ event.company }}</label>
          <div class="tag">
            <label v-for="tag,index in event.tags" v-bind:event="event">{{tag}}</label>
            <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
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
                  <img src="images/img_bg_1.jpg" />
                </li>
                <li>
                  <img src="images/img_bg_2.jpg" />
                </li>
                <li>
                  <img src="images/img_bg_3.jpg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          {{ event.Introduction }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";

export default {
  name: "home",
  props: ["id"],
  data() {
    return {
      event: {},
      publicPath: process.env.BASE_URL
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
        console.log("detailData--", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>