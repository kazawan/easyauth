<template>
      <h1>SIGNUP</h1>
    <div class="signup">
    <label for="exampleInputName">SignUp Name</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputName"
      aria-describedby="nameHelp"
      placeholder="Enter Name"
      v-model="SignUp_data.username"
    /><br />

    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      v-model="SignUp_data.email"
    /><br />

    <label for="exampleInputPassword1">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      v-model="SignUp_data.password"
    /><br />
    <button @click="signup_action" class="btn">SignUp</button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import ApiClient from "../composable/ApiClient";

const { auth } = ApiClient();

const SignUp_data = reactive({
  username: "bobo",
  email: "222@qq.com",
  password: "123123",
});

const signup_action = async () => {
  const res = await auth.SignUp(SignUp_data);
 
  alert(res.msg);
};
</script>


<style scoped>
.signup{
  width: 300px;
  display: flex ;
  flex-direction: column;
}

.signup input{
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