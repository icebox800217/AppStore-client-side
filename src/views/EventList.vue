<template>
  <div class="event-list">
    <div class="containt">
      <div class="row">
        <div class="col-md-12 search">
          <input type="text" v-on:keyup="linkClick('search')" v-model="search" placeholder="搜尋App(類別、標籤、說明)"/>
          <!-- <button type="button" class="default" v-on:click="searchSubmit">搜尋</button> -->
        </div>
        <div class="col-md-12 type-nav">
          <div class="type-nav-data">
            <span><a v-on:click="linkClick('all')">全部</a></span>
            <span><a v-on:click="linkClick('hot')">熱門</a></span>
            <span><a v-on:click="linkClick('news')">新品上架</a></span>
            <span v-for="category in categorys" :key="category.id">
              <a v-on:click="linkClick(category.id)">{{ category.category }}</a>
            </span>
            <!-- <span><a v-on:click="linkClick('family')">家庭</a></span>
            <span><a v-on:click="linkClick('game')">遊戲</a></span>
            <span><a v-on:click="linkClick('life')">休閒</a></span>
            <span><a v-on:click="linkClick('education')">教育</a></span> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <h3 class="pageTit">最新熱門</h3>
          <div class="row">
            <EventCard v-for="event in apps" :key="event.id" :event="event" />
          </div>
          
        </div>
      </div>
    </div>    
    <nav class="footer-nav">
      <ul>
        <li v-on:click="linkClick(1)">
          <i class='fas fa-gamepad'></i>
          遊戲
        </li>
        <li v-on:click="linkClick('hot')">
          <i class='fas fa-cubes'></i>
          熱推
        </li>
        <li v-on:click="linkClick('news')">
          <i class="fa fa-youtube-play"></i>
          最新
        </li>
        <li v-on:click="linkClick(5)">
          <i class='fas fa-journal-whills'></i>
          工具
        </li>
      </ul>
    </nav>
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
      eventDatas:[],
      categorys:[],
      apps: [],
      comment:{},
      starAve:0
      // term: ''
    };
  },
  created() {
    // EventService.getEvents()
    //   .then(response => {
    //     this.events = response.data;
    //     this.eventDatas = response.data;
    //   })
    //   .catch(error => {
    //     console.log("There was an error:", error.response);
    //   });
    EventService.getAllCategory()
      .then(response => {
        this.categorys = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    EventService.getApps()
      .then(response => {
        this.apps = response.data;
        this.eventDatas = response.data;
        
        // this.apps = this.eventDatas.filter((searchData) =>{
        //   if(searchData.device.match('android')){
        //     this.eventDatas = searchData.device.match('android')
        //     return this.eventDatas;
        //   }
        // });
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods:{
    // searchSubmit:function() {
    //   console.log("search--",this.search);
    //   const searchData = {
    //     search:this.search
    //   };  
      
    //   EventService.getSearch(searchData)
    //   .then(function (response) {  
    //     console.log("response---",response);
    //     let status = response.statusText;  
    //     console.log("response---",response);      
    //     if(status == "OK"){          
    //       let sData = response.data;
    //       console.log("this---",this);
    //       console.log("sData---",sData);            
    //     }
    //   })
    //   .catch(function (error) {
    //   console.log("error--",error);
    //   }); 
    // },
    linkClick:function(linkData){
      //alert(linkData);
      this.apps = this.eventDatas.filter((searchData) =>{
        if(linkData == 'all' ||linkData == 'hot'||linkData == 'news'){
          return this.eventDatas;
        }else if(searchData.categoryId == linkData){
          return this.apps;
        }else if(linkData == 'search'){
          if(searchData.introduction.match(this.search)){
            return searchData.introduction.match(this.search);
          }
          if(searchData.appName.match(this.search)){
            return searchData.appName.match(this.search);
          }
          if(searchData.tags.match(this.search)){
            return searchData.tags.match(this.search);
          }
        } 
      })


      // this.events = this.eventDatas.filter(d => {
      //   if(linkData == 'all'){
      //     return this.eventDatas;
      //   }else if(d.category == linkData){
      //     return d;
      //     console.log("d--",this.events);
      //   }  

      //   for (let name in d) {
      // console.log("name---",d[name]);
      // //     if (d[name].toLowerCase().indexOf(val.toLowerCase()) > -1) {
      // // //console.log("val---",val);
      // //       return d;
      // //     }
      //   }
      // })
    }
  },
  computed:{
    // appsData:function(){
    //   console.log("thisApps--",this.apps);
    //   console.log("thissearch--",this.search);
    //   //console.log("eventData--",eventData);
    //   //let searchData = this.search;
    //   if(this.search !== ""){
    //     return this.apps.filter((appsData) =>{ 
    //   //console.log("appsData--",appsData);
    //       return appsData.appName.match(this.search);
    //     });
    //   }else{
    //     return this.apps;
    //   }
    // }
  }
};
</script>