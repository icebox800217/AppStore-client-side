<template>
  <div>
    <!-- <div class="event-header">
      <span class="eyebrow">@{{ app.time }} on {{ app.date }}</span>
      <h1 class="title">{{ app.title }}</h1>
      <h5>Organized by {{ app.organizer }}</h5>
      <h5>Category: {{ app.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address>{{ app.location }}</address>
    <h2>Event details</h2>
    <p>{{ app.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{ app.attendees ? app.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in app.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>-->
    <div class="containt proShow">
      <h3 class="pageTit">商品明細</h3>
      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12 proShowIcon">
          <img :src="imgPath + `${app.appIcon}`" /><!--${publicPath}-->
            <!-- {{app.icon}}
            {{ publicPath }} -->
        </div>
        <div class="col-md-8 col-sm-12 col-xs-12 appDetail">
          <h3>{{ app.appName }}</h3>
          <!-- <label>{{ app.company }}</label> -->
          <div class="tag">
            <label v-for="(tag,index) in app.tagsArr" :key="index">{{tag}}</label>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 starGrp">
              <i class='fas fa-star' v-for="(star,index) in starAve" :key="index"></i>
              <!-- <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='far fa-star'></i>
              <i class='far fa-star'></i> -->
            </div>
          </div>
          <!-- <a href="itms-services://?action=download-manifest&url=https://dl.dropbox.com/s/y9xde17wpntkqg7/MyPlist.plist">下載</a> -->
          <!-- <button class="btn btn-default" v-on:click="downloadApp">下載</button> -->
          <!--${publicPath}-->
          <a v-if="app.device == 'android'" :href="`${app.fileURL}`" class="btnDownload">android 下載</a>
          <a v-if="app.device == 'ios'" :href="`itms-services://?action=download-manifest&url=https://dl.dropbox.com/s/y9xde17wpntkqg7/${app.file}`" class="btnDownload">ios 下載</a>

          <!-- <button @click="downloadWithVueResource">Download file with Vue Resource</button>
          <button @click="downloadWithAxios">Download file with Axios</button>
           -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 slideImgGrp">
          <div class="slideImg">
            <img :src="imgPath +`${slideImg1}`" /><img :src="imgPath+`${slideImg2}`" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <p v-html="app.Introduction" class="proShowDesc"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 chartGrp">
          <h3>評論</h3>
          <!-- <div class="col-md-4 col-sm-4 col-xs-4">
            <span class="chartTit">4.8</span>
            <span class="star">
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='far fa-star'></i>
              <i class='far fa-star'></i>
            </span>
            <span>共 {{comment.length}} 則評分</span>            
          </div>
          <div class="col-md-8 col-sm-8 col-xs-8">
            <div id="chart_div"></div>
          </div> -->
        </div>
      </div>
      <div class="row QAGrp" v-for="(commData,index) in comment" :key="index">
        <div class="col-md-2 col-sm-2 col-xs-4 icon">
          <img :src="`${publicPath}images/icon${commData.imgId}.jpg`"/>
        </div>
        <div class="col-md-10 col-sm-10 col-xs-8 QAData">
            <h5>
              <!-- 藍菇菇 -->
              {{commData.name}}
            </h5>          
            <i class='fas fa-star' v-for="(commData,index) in commData.star" :key="index"></i>
            <!-- <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='far fa-star'></i>
            <i class='far fa-star'></i> -->
            <p>
                {{ commData.comment }}
            </p>
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
      app:{},
      comment:{},
      AppImgs:{},
      slideImg1:'',
      slideImg2:'',
      starAve:0,
      publicPath: process.env.BASE_URL,
      imgPath: window.sessionStorage.imgPath,
      url:'https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png'
    };
  },
  mounted(){
    let appurl = '';
    appurl = this.app.file;
    console.log("appurl--",appurl);
  },
  methods:{
    forceFileDownload(response){
      // const url = window.URL.createObjectURL(new Blob([response.data]))
      // const link = document.createElement('a')
      // //link.href = url
      // link.href = this.publicPath + "appfiles/android/" + this.app.file
      // console.log("linkHref--",link.href);
      // link.setAttribute('download', 'file.png') //or any other extension
      // document.body.appendChild(link)
      // link.click()

      const url = this.app.file.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      //link.href = url
      link.href = this.publicPath + "appfiles/android/" + this.event.file
      console.log("linkHref--",link.href);
      link.setAttribute('download', 'file.png') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    downloadApp:function(){
      // navigator.userAgent.match("Firefox")　//判斷是否為 FireFox
      // navigator.userAgent.match("MSIE")　//判斷是否為 IE
      // navigator.userAgent.match("Opera")　//判斷是否為 Opera
      // navigator.userAgent.match("Safari")　//判斷是否為 Safari 或 Google Chrome
      console.log("appUrl---",this.app.file);
      console.log("userAgent",window.navigator.userAgent);      
      console.log("event---",this.event);
    },
    
    downloadWithVueResource() {
      
      this.$http({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        this.forceFileDownload(response)  
      })
      .catch(() => console.log('error occured'))
      
    },
    
    downloadWithAxios(){
      axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    }
  },
  created() {
    // EventService.getEvent(this.id)
    //   .then(response => {
    //     this.event = response.data;
    //     console.log("detailData--", response.data);
    //   })
    //   .catch(error => {
    //     console.log("There was an error:", error.response);
    //   });
    EventService.getApp(this.id)
      .then(response => {
        this.app = response.data;

        let tags = [];
        // var splits1 = str.split(" ");
        tags = this.app.tags.split(",");
        this.app.tagsArr = tags;
        //tags = JSON.parse(tags);
        console.log("detailData--", this.app);
        console.log("detailDataTags--", tags);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    EventService.getComment(this.id)
      .then(response => {
        this.comment = response.data;
        let starCnt = 0;
        console.log("commentCount--", this.comment.length);
        if(this.comment.length !== 0){
          for(var i=0;i<this.comment.length;i++){
            starCnt = starCnt + this.comment[i].star;
          }
          this.starAve = Math.ceil(starCnt / parseInt(this.comment.length));          
        }
        console.log("this.starAve--", this.starAve);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    EventService.getAppImg(this.id)
      .then(response => {
        this.AppImgs = response.data;
        this.slideImg1 = this.AppImgs[0].screenShot;
        this.slideImg2 = this.AppImgs[1].screenShot;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>