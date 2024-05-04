import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../components/Layouts/pages/Home.vue";
import About from "../components/Layouts/pages/About.vue";

import Dashboard from "../components/Layouts/pages/Dashboard.vue";
import Question from "../components/Layouts/pages/Question.vue";
import Assignment from "../components/Layouts/pages/Assignment.vue";
import Course from "../components/Layouts/pages/Course.vue";
import Admin from "../components/Layouts/pages/Admin.vue";
import Setting from "../components/Layouts/pages/Setting.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/Dashboard", component: Dashboard },
  { path: "/Question", component: Question },
  { path: "/Assignment", component: Assignment },
  { path: "/Course", component: Course },
  { path: "/Admin", component: Admin },
  { path: "/Setting", component: Setting },
];

const router = createRouter({
  history: createWebHashHistory("/FinanceDashboard/"),
  routes,
});

export default router;
