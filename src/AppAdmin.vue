<template>
  <div id="app">
    <header class="r_head">
        <h1 class="h1_report">
            AppStoreAdmin
        </h1>  
    </header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->    
    <div class="reportCenter">
        <div class="box_clear">
            <div class="box_menu" id="nav">
                <ul class="r_menu">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">會員管理</router-link>
                    </li>
                    <li>
                        <router-link to="/appsmanage">App管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="box_data">
                <router-view />
            </div>
        </div>
    </div>
  </div>

</template>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
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
