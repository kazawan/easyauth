<script setup>
import ApiClient from '../composable/ApiClient';

const {auth,user} = ApiClient();

</script>

<template>
<div class="topbar">
    <router-link  to="/">Home</router-link> 
    <router-link   to="/Signup">  SignUp</router-link> 
    <router-link   to="/Login"> Login</router-link> 
    <span class="logout"  @click="auth.Logout">Logout</span>
</div>
</template>

<style scoped>

.logout{
    cursor: pointer;
    position:absolute;
    right:0;
    color: #000;
    /* margin: 0 10px; */
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    background-color: #e49662;
    padding: 0 20px;
    border-radius: 10px;
    


}
.topbar{
    /* background-color: #f2f2f2; */
    position: relative;
    
}

.topbar a{
    color: #000;
    /* margin: 0 10px; */
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    background-color: #4eca8c;
    padding: 0 20px;
    border-radius: 10px;
    margin-right: 10px;
}



</style>