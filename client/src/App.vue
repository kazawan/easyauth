<template>
  <Topbar />
  
  <router-view />
  <p>
    {{user ? `Welcome ${user.username}` : "please login"}}
  </p>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Topbar from "./components/Topbar.vue";
import ApiClient from "./composable/ApiClient";
import { useRouter } from "vue-router";
const router = useRouter();

const {user} = ApiClient();

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("userinfo"));
});

</script>


