import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/pages/HomePage.vue";
import FavoritePage from "./components/pages/FavoritePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/favorite",
    component: FavoritePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

// TheSearch.vue
// PokemonCard.vue
// FavoritePage.vue emit
