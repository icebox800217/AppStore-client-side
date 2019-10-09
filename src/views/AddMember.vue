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
import axios from 'axios'

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
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // await new Promise((resolve, reject) => reject('Sample Error'));
      
      const { email, password } = this;
      const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      };
      console.log("opts---",opts);
      const res = await fetch('http://localhost:3000/postMember', opts).
        then(res => res.json()).
        then(res => JSON.parse(res.data));
      console.log('done', res.email, res.password);
      // this.firstName = '';
      // this.lastName = '';
    }
    // formSubmit:function(){
    //   console.log("email--",this.email);
    //   alert(this.email);
    // }
  }
}
</script>
