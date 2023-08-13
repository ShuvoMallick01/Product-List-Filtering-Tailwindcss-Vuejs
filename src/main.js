import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// IMPORT COMPONENTS
import ProductFilterActions from "./components/ProductFilterActions.vue";
import ProductFilterViewer from "./components/ProductFilterViewer.vue";
import ProductTable from "./components/ProductTable.vue";
import ProductTableHead from "./components/ProductTableHead.vue";

const app = createApp(App);

// GLOBAL COMPONENT
app.component("ProductFilterActions", ProductFilterActions);
app.component("ProductFilterViewer", ProductFilterViewer);
app.component("ProductTable", ProductTable);
app.component("ProductTableHead", ProductTableHead);

app.mount("#app");
