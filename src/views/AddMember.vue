<template>
  <div class="add-member"> 
    <div class="containt">
    <h3>user list</h3>
    <form><!-- @submit="formSubmit"-->
        <div class="form-group">
            <label for="InputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="email"
            id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="password"
            id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
            <label for="InputAddress">address</label><br/>
            <label v-for="city in cityData" :key="city.id">
              <input type="checkbox" v-model="cities" name="cities[]" v-bind:value="city.id"
              >
              {{city.text}}
            </label>
            <!-- <input type="checkbox" class="form-check-input" v-model="checkAdmin"
            id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
        </div>
        <!-- {{cities}} -->
        <button type="button" class="btn btn-info" v-on:click="formSubmit">Submit</button>
    </form>
    </div>
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";
import axios from 'axios';
import VueSession from "vue-session";

export default {
  data(){
    return{
      email:'',
      password:'',
      checkAdmin:'',
      cities:["1","2"],
      cityData:[
        {id:"1",text:"Taipei"},
        {id:"2",text:"Taiwan"},
        {id:"3",text:"Tainan"}
      ]
    }
  },
  methods:{
    formSubmit: async function() {
      const { email, password } = this._data;
      console.log("this--",this);
      console.log("window--",window);
      EventService.postLogin({ email, password })
      .then(function (response) {  
        let status = response.statusText;
        if(status == "OK"){
            EventService.getMember()
            .then(response => {
              console.log("data---", response.request.response);
              let userData = response.request.response;
              window.sessionStorage.setItem('userData',userData);
              console.log("userData--",userData);
              location.href = '/';
            })
            .catch(error => {
              console.log("There was an error:", error.response);
            });
        }
      //console.log("response---",response);
      })
      .catch(function (error) {
      console.log("error--",error);
      });    
    }
  }
}
</script>