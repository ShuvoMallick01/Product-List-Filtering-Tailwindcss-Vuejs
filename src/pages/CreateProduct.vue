<template>
  <section class="container mx-auto px-4 py-5">
    <h2 class="text-slate-200 text-2xl py-5 mb-5 font-semibold">
      Create Product
    </h2>

    <!-- Form -->
    <Form
      :product="productFields"
      :submitForm="createForm"
      :title="title"
    ></Form>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "../store/product-store";
import Form from "../components/Form.vue";

export default {
  data() {
    return {
      productFields: {
        title: "",
        price: "",
        category: "",
        rating: "",
      },
      title: "Create",
    };
  },

  methods: {
    createForm() {
      let product = {
        id: Number(this.products.length) + 1,
        title: this.productFields.title,
        price: this.productFields.price,
        description: "NA",
        category: this.productFields.category,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: this.productFields.rating, count: 120 },
      };

      this.handleCreateProduct(product);
      this.$router.push("/");
    },

    ...mapActions(useProductStore, ["handleCreateProduct"]),
  },

  computed: {
    ...mapState(useProductStore, ["products"]),
  },

  components: { Form },
};
</script>
