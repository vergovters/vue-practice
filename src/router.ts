import { createMemoryHistory, createRouter } from "vue-router";

import NextPage from "./pages/NextPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/first", component: HomePage },
    { path: "/next", component: NextPage }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})