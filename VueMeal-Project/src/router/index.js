import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: () => import("../views/MealsByName.vue"),
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: () => import("../views/MealsByLetter.vue"),
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: () => import("../views/Ingredients.vue"),
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: () => import("../views/MealsByIngredient.vue"),
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: () => import("../views/MealDetails.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
