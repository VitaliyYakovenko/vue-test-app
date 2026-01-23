import { createRouter, createWebHistory } from "vue-router";
const Home =() => import("../pages/Home.vue");
const ContactDetail = () => import("../pages/ContactDetail.vue");


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact/:id",
    name: "contact-detail",
    component:ContactDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;