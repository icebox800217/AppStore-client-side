<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/AppStores">AppStores</router-link>
    </div> -->    

    <div class="devRegGrp">        
        <i class="material-icons hover" onclick="devRegClose()">close</i>
        <div class="row">
            <div class="col-md-4 userImg">
                <!-- <img :src="`${publicPath}`+`images/userImg`+`${loginUser.imgId}`+`.jpg`"> -->
                <img :src="`${publicPath}`+`images/userImg1.jpg`">
            </div>
            <div class="col-md-8 userGrp memberUl">
              {{ loginUser.email }}<br>
              <router-link :to="{ name: 'add-member' }" class="external hover">開發人員申請</router-link><br>
              <a class="external hover" v-on:click="logout">登出</a>                  
            </div>
        </div>
    </div>

    
    <!-- <nav class="ubea-nav" role="navigation">
		<div class="ubea-container">
			<div class="row">
				<div class="col-sm-2 col-xs-12">
					<div id="ubea-logo"><a href="index.html">uBeasa <em>.</em></a></div>
				</div>
				<div class="col-xs-10 text-right menu-1 main-nav">
					<ul>
						<li class="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#" data-nav-section="services">Services</a></li>
						<li><a href="#" data-nav-section="portfolio">Portfolio</a></li>
                        <li><a href="#" data-nav-section="about">About us</a></li>
						<li><a href="#" data-nav-section="contact">Contact</a></li>
						<li><a href="https://www.freshdesignweb.com/" class="external">External</a></li>
					</ul>
				</div>
			</div>			
		</div>
	</nav> -->

    <nav class="ubea-nav" role="navigation">  
        <div class="ubea-container">
            <div class="row">
                <div class="col-sm-2 col-xs-2">
                    <div id="ubea-logo">
                      <router-link to="/">App Store</router-link>
                    </div>
                </div>
                <div class="col-xs-10 text-right main-nav menu-1"><!---->
                    <ul>
                        <!-- <li class="active">
                          <router-link to="/app-stores">App Stores</router-link>
                        </li> -->
                        <li>
                          <a :href="`${publicPath}`" class="external">App List</a>
                          <!-- <router-link :to="{ name: 'event-list' }">App List</router-link> -->
                          <!--  |<router-link :to="{ name: 'event-create' }">Create</router-link> 
                          <router-link to="/app-stores">商品列表</router-link>-->
                        </li>
                        <li v-if="loginUser.name !== null">
                          <!-- <a href="login.html" class="external" data-nav-section="home">Guest</a>/ -->
                          <a onclick="devRegOpen()" class="devRegOpen">{{ loginUser.email }}</a>
                        </li>
                        <!-- <router-link v-if="loginUser.email == null" :to="{ name: 'register' }">註冊</router-link>
                        <router-link v-if="loginUser.email == null" :to="{ name: 'login' }">登入</router-link> -->
                        <a v-if="loginUser.email == null" :href="`${publicPath}register`" class="external">註冊</a>/
                        <a v-if="loginUser.email == null" :href="`${publicPath}login`" class="external">登入</a>
                        <!-- <li>
                            <input type="text" />
                            <button class="btn btn-default">搜尋</button>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
}
</style> 
<script>
import EventService from '@/services/EventService.js'

export default {
    // components: {
    // 
    // },
    data() {
    return {
        loginUser:[],
        publicPath: process.env.BASE_URL,
        imgPath: 'http://127.0.0.1:8000',
        isUser:false
    } 
    },
    created() {        
        window.sessionStorage.setItem('imgPath',this.imgPath);
        if(window.sessionStorage.length !== 0){
          //this.loginUser = JSON.parse(window.sessionStorage.userData)[0];
          //this.loginUser = JSON.parse(window.sessionStorage.userData);
          this.loginUser = JSON.parse(window.sessionStorage.userData);
          console.log("loginUser--",this.loginUser);
        }
        // EventService.getEvents()
        //   .then(response => {
        //     this.events = response.data;
        //     this.eventDatas = response.data;
        //     console.log("data---", response.data);
        //   })
        //   .catch(error => {
        //     console.log("There was an error:", error.response);
        //   });
    // EventService.loginUser()
    //     .then(response => {
    //     this.loginUser = response.data
    //     console.log("loginUser---",response.data);
    //     console.log("window--",window);
    //     })
    //     .catch(error => {
    //     console.log('There was an error:', error.response)
    //     })
    },
    methods:{
      logout(){
        window.sessionStorage.removeItem('userData');
        window.sessionStorage.clear();
        location.href = '/';
      }
    }

}
</script>
