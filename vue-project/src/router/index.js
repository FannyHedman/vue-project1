import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SectionAbout from "../components/SectionAbout.vue";

// const ContactForm = {
//   template: "<h1>{{$route.params.id}}</h1>",
// };
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    { component: SectionAbout, path: "/sectionabout/:id", name: "About" },
  ],
});

export default router;
