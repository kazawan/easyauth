<template>
    <h1>Welcome {{ user.username }}</h1>
    <p v-for="todos in todo.value">{{ todos.title }}</p>
</template>

<script setup>
import {ref , onMounted, reactive} from "vue";
import ApiClient from "../composable/ApiClient";
const {user,api} = ApiClient();
const todo = reactive({});
onMounted(async()=>{
    // user.value = JSON.parse(localStorage.getItem("userinfo"));
    const {todos} = await api('GetTodos',{
        email: user.value.email
    })
    todo.value = todos;
    
})

</script>