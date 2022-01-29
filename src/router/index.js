import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

const Index = () => import("../views/Index.vue");
// const Fn = () => import("../views/Fn.vue");

const routes = [
    { name: "index", path: "/", component: Index },
    // { name: "fn", path: "/fn", component: Fn },
];

const router = new VueRouter({
    // mode: "history",
    // base: '/team',
    routes,
});

export default router;
