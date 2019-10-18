<template>
  <div class="login"> 
    <div class="containt">
    <h3>會員登入</h3>
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
      checkAdmin:''
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
            console.log("data---", response);
            let userData = response.config.data;
            window.sessionStorage.setItem('userData',userData);
            console.log("userData--",userData);
            location.href = '/';
            // EventService.getMember()
            // .then(response => {
              
            // })
            // .catch(error => {
            //   console.log("There was an error:", error.response);
            // });
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