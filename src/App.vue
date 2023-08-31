<template>
  <Navbar />

  <!-- Page View -->
  <router-view></router-view>

  <Footer />
</template>

<!-- FUNCTIONALITY -->
<script>
// import { mapState, mapActions } from "pinia";
// import { useProductStore } from "./store/product-store";

// export default {
//   computed: {
//     ...mapState(useProductStore, ["selected"]),
//   },

//   methods: {
//     ...mapActions(useProductStore, ["handleSelectedProductDelete"]),
//   },
// };
</script>
