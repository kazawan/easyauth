import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import ApiClient from "../composable/ApiClient" 
import Home from "../views/Home.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }, {
        path: '/login',
        name: 'Login',
        component: Login

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const { isLoggedIn } = ApiClient();
    if (to.name !== 'Login' && to.name !== 'Signup' && !isLoggedIn()) {
        next({ name: 'Login' })
    } else {
        next()
    }
});

export default router