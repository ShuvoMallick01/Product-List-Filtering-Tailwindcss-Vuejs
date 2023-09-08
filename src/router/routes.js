import { createRouter, createWebHistory } from "vue-router";

// IMPORT PAGE
import Home from "../pages/Home.vue";
import CreateProduct from "../pages/CreateProduct.vue";
import EditProduct from "../pages/EditProduct.vue";

// ROUTE
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/createproduct", component: CreateProduct, name: "createproduct" },
    { path: "/editproduct/:id", component: EditProduct, name: "editproduct" },

    // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
