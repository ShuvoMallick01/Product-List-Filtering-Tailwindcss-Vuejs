import "./assets/css/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// PLUGINS
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// IMPORT COMPONENTS
import ProductFilterActions from "./components/ProductFilterActions.vue";
import ProductFilterViewer from "./components/ProductFilterViewer.vue";
import ProductTable from "./components/ProductTable.vue";
import ProductTableHead from "./components/ProductTableHead.vue";
import ProductTableDataRow from "./components/ProductTableDataRow.vue";
import ProductPagination from "./components/ProductPagination.vue";
import Select from "./components/Select.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Layout from "./components/Layout.vue";

// IMPORT PAGE
import Home from "./pages/Home.vue";
import CreateProduct from "./pages/CreateProduct.vue";

// MAIN APP
const app = createApp(App);

// PINIA IMPORT
import { createPinia } from "pinia";
const pinia = createPinia();

// ROUTE
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/createproduct", component: CreateProduct, name: "createproduct" },

    // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

// USE
app.use(router);
app.use(pinia);

// GLOBAL COMPONENT
app.component("ProductFilterActions", ProductFilterActions);
app.component("ProductFilterViewer", ProductFilterViewer);
app.component("ProductTable", ProductTable);
app.component("ProductTableHead", ProductTableHead);
app.component("ProductTableDataRow", ProductTableDataRow);
app.component("ProductPagination", ProductPagination);
app.component("Select", Select);
app.component("Navbar", Navbar);
app.component("Footer", Footer);
app.component("Layout", Layout);

// PLUGINS COMPONENT
app.use(VueSweetalert2, {
  customClass: {
    popup: "bg-slate-600 text-slate-300 rounded-2xl py-12",
    iconHtml: "pt-1",
  },

  showCancelButton: true,
  showConfirmButton: true,
  confirmButtonText: "Delete",
  titleText: "Are you sure?",
  icon: "warning",
});

// MOUNT
app.mount("#app");
