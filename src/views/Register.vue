<template>
  <div class="register"> 
    <div class="containt">
    <h3>會員註冊</h3>
    <form><!-- @submit="formSubmit"-->
        <div class="form-group">
            <label for="InputEmail1">姓名*</label>
            <input type="text" class="form-control" v-model="name" required
            id="InputName" aria-describedby="nameHelp" placeholder="請輸入姓名">
            <small id="nameHelp" class="form-text text-muted">{{nameErrMsg}}</small>
        </div>
        <div class="form-group">
            <label for="InputEmail1">手機號碼*</label>
            <input type="tel" class="form-control" v-model="phone" maxlength="10"
            id="InputTel" aria-describedby="telHelp" placeholder="手機號碼, Ex:0922123456">
            <small id="telHelp" class="form-text text-muted">{{phoneErrMsg}}</small>
        </div>
        <div class="form-group">
            <label for="InputEmail1">Email address*</label>
            <input type="email" class="form-control" v-model="email"
            id="InputEmail1" aria-describedby="emailHelp" placeholder="Email, Ex:user@user.com">
            <small id="emailHelp" class="form-text text-muted">{{emailErrMsg}}</small>
        </div>
        <div class="form-group">
            <label for="InputEmail1">身份證*</label>
            <input type="text" class="form-control" v-model="idNumber" maxlength="10"
            id="InputIdNumber" aria-describedby="numberHelp" placeholder="身份證字號, Ex:N123456789">
            <small id="numberHelp" class="form-text text-muted">{{idNumberErrMsg}}</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">密碼*</label>
            <input type="password" class="form-control" v-model="password" minlength="8" maxlength="12"
            id="InputPassword" placeholder="請輸入密碼, 8-12數字、大小寫英文字母">
            <small id="passwordHelp" class="form-text text-muted">{{passwordErrMsg}}</small>
            
        </div>
        <!-- <div class="form-group">
            <label for="exampleInputPassword1">確認密碼*</label>
            <input type="password" class="form-control" v-model="confirmPassword"
            id="InputConfirmPassword" placeholder="請輸入確認密碼, 8-12數字、大小寫英文字母">
        </div> -->
        <!-- <div class="form-group">
            <label for="InputEmail1">個人圖像</label>
            <input type="file" class="form-control">
        </div> -->
        <!-- <div class="form-group form-check">
            <label for="InputAddress">address</label><br/>
            <label v-for="city in cityData" :key="city.id">
              <input type="checkbox" v-model="cities" name="cities[]" v-bind:value="city.id"
              >
              {{city.text}}
            </label>
        </div> -->
        <button type="button" class="btn btn-info" v-on:click="formSubmit">Submit</button><!---->
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
      // registerData:{
      //   name:'',
      //   phone:'',
      //   email:'',
      //   idNumber:'',
      //   password:'',
      //   //confirmPassword:'',
      //   //imgFile:'1'
      // },
      name:'',
      nameError: false,
      nameErrMsg: '',
      phone:'',
      phoneError: false,
      phoneErrMsg: '',
      email:'',
      emailError: false,
      emailErrMsg: '',
      idNumber:'',
      idNumberError: false,
      idNumberErrMsg: '',
      password:'',
      passwordError: false,
      passwordErrMsg: '',
      checkAdmin:'',
      cities:["1","2"],
      cityData:[
        {id:"1",text:"Taipei"},
        {id:"2",text:"Taiwan"},
        {id:"3",text:"Tainan"}
      ]
    }
  },
  watch:{
    name:function(){
      let isText = /^[a-zA-Z0-9]+$/;;
      if (!isText.test(this.name)) {
          this.nameError = true;
          this.nameErrMsg = '請勿空白';
      }
      else {
          this.nameError = false;
          this.nameErrMsg = '';
      }
    },
    phone:function(){
      let isPhone = /^[0-9]+$/;
      if (!isPhone.test(this.phone)) {
          this.phoneError = true;
          this.phoneErrMsg = '請輸入0-9數字';
      }
      // else if(!isPhone.test(this.phone.length > 11)){
      //     this.phoneError = true;
      //     this.phoneErrMsg = '請輸入完整手機號碼至少10碼';
      // }
      else {
          this.phoneError = false;
          this.phoneErrMsg = '';
      }      
    },
    email:function(){
      let isEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (!isEmail.test(this.email)) {
          this.emailError = true;
          this.emailErrMsg = '請輸入Email完整格式, Ex:user@user.com';
      }
      else {
          this.emailError = false;
          this.emailErrMsg = '';
      }
    },
    idNumber:function(){
      let isIdNumber = /^[a-zA-Z0-9]+$/;
      if (!isIdNumber.test(this.idNumber)) {
          this.idNumberError = true;
          this.idNumberErrMsg = '請輸入身份證字號, Ex:N123456789';
      }else if(!isIdNumber.test(this.idNumber.length < 11)){
          this.idNumberError = true;
          this.idNumberErrMsg = '身份證字號不可小於10碼';
      }
      else {
          this.idNumberError = false;
          this.idNumberErrMsg = '';
      }
    },
    password:function(){
      let isText = /^[a-zA-Z0-9]+$/;
      var inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
      if (!isText.test(this.password)) {
          this.passwordError = true;
          this.passwordErrMsg = '密碼需包含, 大小寫英文字母、數字，共8-12位字元';
      }
      else {
          this.passwordError = false;
          this.passwordErrMsg = '';
      }
    }
  },
  methods:{
    formSubmit: async function() {
      const registerData = {
        name:this._data.name,
        phone:this._data.phone,
        email:this._data.email,
        idNumber:this._data.idNumber.toUpperCase(),
        password:this._data.password
      };  

      //let registerData = this._data;      
      console.log("this_data--",this._data);
      console.log("registerData--",registerData);
      console.log("window--",window);
      EventService.postMember(registerData)
      .then(function (response) {  
        console.log("response---",response);
        let status = response.statusText;  
        console.log("response---",response);      
        if(status == "OK"){          
          let userData = response.data;
          console.log("this---",this);
          console.log("userData---",userData);
            //userData = Object.keys(userData).map(function(_) { return userData[_]; });
            //find loginUser Data
            const { email, password } = registerData;
            EventService.postLogin({ email, password })
            .then(function (response) {  
              console.log("response---",response);
              let status = response.statusText;        
              if(status == "OK"){   
                  console.log("data---", response);
                  let userData = response.config.data;
                  window.sessionStorage.setItem('userData',userData);
                  console.log("userData--",userData);       
                  location.href = '/';
              }
            })
            .catch(function (error) {
            console.log("error--",error);
            });
            //find loginUser Data
            //location.href = '/';
        }
      })
      .catch(function (error) {
      console.log("error--",error);
      });    
    }
  }
}
</script>