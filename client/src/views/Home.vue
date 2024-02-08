<template>
    <h1>Welcome {{ user.username }}</h1>
    <p v-for="todos in todo.value">{{ todos.title }}</p>
</template>

<script setup>
import {ref , onMounted, reactive} from "vue";
import ApiClient from "../composable/ApiClient";
const {user,api,auth} = ApiClient();
const todo = reactive({});
onMounted(async()=>{
    // user.value = JSON.parse(localStorage.getItem("userinfo"));
    const {todos,error,code} = await api('GetTodos',{
        
        token: user.value.token
    })
    if(error){
        if(code == 50001){
            auth.Logout();
            alert(error);
            return;
        }
        if(code == 50002){
            alert('refresh token');
            return;
        }

        return;
    }
    todo.value = todos;
    
})

</script>