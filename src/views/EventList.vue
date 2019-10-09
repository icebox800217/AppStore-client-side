<template>
  <div>
    <div class="containt">
      <div class="row">
        <div class="col-md-12 type-nav">
          <a v-on:click="linkClick('all')">全部</a> |
          <a v-on:click="linkClick('hot')">熱門</a> |
          <a v-on:click="linkClick('hot')">新品上架</a> |
          <a v-on:click="linkClick('life')">家庭</a> |
          <a v-on:click="linkClick('game')">遊戲</a> |
          <a v-on:click="linkClick('life')">休閒</a> |
          <a v-on:click="linkClick('hot')">教育</a>
        </div>
        <!-- <div class="col-md-12">
          <input type="text" v-model="search" placeholder="search"/>
        </div> -->
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
      events: [],
      search:'',
      eventDatas:[]
      //filtered: data,
      // term: ''
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
        this.eventDatas = response.data;
        console.log("data---", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    
  },
  methods:{
    linkClick:function(linkData){
      //alert(linkData);
      this.events = this.eventDatas.filter(d => {
        if(linkData == 'all'){
          return this.eventDatas;
        }else{
          if(d.category == linkData){
            return d;
            console.log("d--",this.events);
          }
        }        
      //   for (let name in d) {
      // console.log("name---",d[name]);
      // //     if (d[name].toLowerCase().indexOf(val.toLowerCase()) > -1) {
      // // //console.log("val---",val);
      // //       return d;
      // //     }
      //   }
      })
    }
  },
  computed:{
    filteredEvents:function(){
      return this.events.filter((eventData) =>{        
        return eventData.category.match(this.search);
      });
    }
  }
};
</script>