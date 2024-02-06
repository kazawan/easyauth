<template>
    <h1>LOGIN</h1>
    <div class="Login">

    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      v-model="Login_data.email"
    /><br />

    <label for="exampleInputPassword1">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      v-model="Login_data.password"
    /><br />
    <button @click="Login_action" class="btn">Login</button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import ApiClient from "../composable/ApiClient";
const { auth,user } = ApiClient();

const Login_data = reactive({
  email: "222@qq.com",
  password: "123123",
});

const Login_action = async () => {
  const {msg,userinfo} = await auth.Login(Login_data);
  localStorage.setItem("userinfo",JSON.stringify(userinfo));
  user.value = userinfo;
  alert(msg);
};
</script>


<style scoped>
.Login{
  width: 300px;
  display: flex ;
  flex-direction: column;
}

.Login input{
  margin-top: 10px;
  width: 100%;
  height: 30px;
  border-radius: 4px;
}

.btn{
  margin-top: 10px;
  width: 100%;
  height: 30px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>