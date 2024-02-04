<template>
SignUp 
    <label for="exampleInputName">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" v-model="SignUp_data.name">
    
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="SignUp_data.email">
    
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="SignUp_data.password">
  <button @click="signup_action">SignUp</button>


</template>

<script setup>
import { ref,reactive,onMounted }  from 'vue'
import  ApiClient from './composable/ApiClient'
const { authFetch,SignUp } = ApiClient()


const SignUp_data = reactive({
  name:'bobo',
  email:'222@qq.com',
  password:'123123'
})

const signup_action = async() =>{
  
  
  const res = await SignUp(SignUp_data)
  alert(res.msg)

}


</script>