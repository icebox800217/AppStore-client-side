<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/AppStores">AppStores</router-link>
    </div> -->
    <nav class="ubea-nav" role="navigation" id="nav">
        <div class="ubea-container">
            <div class="row">
                <div class="col-sm-2 col-xs-12">
                    <div id="ubea-logo">
                      <router-link to="/">App Store</router-link>
                    </div>
                </div>
                <div class="col-xs-10 text-right main-nav">
                    <ul>
                        <li class="active">
                          <router-link to="/app-stores">App Stores</router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'event-list' }">商品列表</router-link>
                          <!--  |<router-link :to="{ name: 'event-create' }">Create</router-link> 
                          <router-link to="/app-stores">商品列表</router-link>-->
                        </li>
                        <li>
                          <!-- <a href="login.html" class="external" data-nav-section="home">Guest</a>/ -->
                          <a onclick="devRegOpen()" class="devRegOpen">{{ member.name }}</a>
                          <div class="devRegGrp">
                              <a href="#"><i class="material-icons" onclick="devRegClose()">close</i></a>
                              <div class="row">
                                  <div class="col-md-6 userImg">
                                      <img src="images/userImg.jpg">
                                  </div>
                                  <div class="col-md-6 userGrp">
                                      <ul class="memberUl">
                                          <li>{{ member.email }}</li>
                                          <li>
                                            <router-link :to="{ name: 'add-member' }" class="external">開發人員申請</router-link>
                                            <!-- <a href="developRegist.html" class="external">開發人員申請</a> -->
                                             | 
                                            <a href="index.html" class="external">登出</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                        </li>
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
    <nav class="footer-nav">
      <ul>
        <li>遊戲</li>
        <li>應用程式</li>
        <li>電影</li>
        <li>圖書</li>
      </ul>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style> 
<script>
import EventService from '@/services/EventService.js'

export default {
    // components: {
    // EventCard
    // },
    data() {
    return {
        member: []
    }
    },
    created() {
    EventService.getMember()
        .then(response => {
        this.member = response.data
        console.log("member---",response.data);
        console.log("window--",window);
        })
        .catch(error => {
        console.log('There was an error:', error.response)
        })
    }
}
</script>
