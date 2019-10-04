<template>
  <div class="app-stores">
    <!-- <img alt="Vue logo" src="logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->

    <div class="containt">
      <div class="row">
        <div class="col-md-12 col-sm-6 col-xs-12">
          <h2>熱門 | 新品上架</h2>
          <p>最新熱門APP</p>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <router-link to="/app-stores-detail">
                <div class="appGrpBox">
                  <ul>
                    <li>
                      <img src="images/appImg1.jpg" />
                    </li>
                    <li>
                      <h4>糖果傳奇</h4>
                      <em>King</em>
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
              </router-link>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <div class="appGrpBox">
                <ul>
                  <li>
                    <img src="images/appImg2.jpg" />
                  </li>
                  <li>
                    <h4>糖果傳奇</h4>
                    <em>King</em>
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
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <div class="appGrpBox">
                <ul>
                  <li>
                    <img src="images/appImg3.jpg" />
                  </li>
                  <li>
                    <h4>糖果傳奇</h4>
                    <em>King</em>
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
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <div class="appGrpBox">
                <ul>
                  <li>
                    <img src="images/appImg4.jpg" />
                  </li>
                  <li>
                    <h4>糖果傳奇</h4>
                    <em>King</em>
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
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <div class="appGrpBox">
                <ul>
                  <li>
                    <img src="images/appImg1.jpg" />
                  </li>
                  <li>
                    <h4>糖果傳奇</h4>
                    <em>King</em>
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
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
              <div class="appGrpBox">
                <ul>
                  <li>
                    <img src="images/appImg1.jpg" />
                  </li>
                  <li>
                    <h4>糖果傳奇</h4>
                    <em>King</em>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
// new Vue({
//     el:'Test',
//     data(){
//         return{
//             info:null
//         }
//     },
//     mounted(){
//         axios
//             .get('http://127.0.0.1:8000/member/show/data')
//             .then(response => (this.info = response))
//             .catch(error => console.log(error))
//     }
// })
</script>
