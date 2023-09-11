<template>
  <section class="container mx-auto px-4 py-5">
    <h2 class="text-slate-200 text-2xl py-5 mb-5 font-semibold">
      Edit Product | Product ID: {{ editId }}
    </h2>

    <!-- Form -->
    <Form
      :product="productFields"
      :submitForm="handleEditForm"
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
      editId: null,
      productFields: {
        title: "",
        price: "",
        category: "",
        rating: "",
      },

      title: "Update",
    };
  },

  methods: {
    handleEditForm() {
      let product = {
        id: this.editId,
        title: this.productFields.title,
        price: this.productFields.price,
        description: "NA",
        category: this.productFields.category,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: this.productFields.rating,
      };

      this.handleEditProduct(product);
      return this.$router.push("/");
    },

    ...mapActions(useProductStore, ["handleEditProduct"]),
  },

  beforeRouteEnter(to, form, next) {
    console.log(to, form);

    next((vm) => {
      vm.editId = to.params.id;
      let product = vm.products.find((item) => item.id === +to.params.id);
      vm.productFields.title = product.title;
      vm.productFields.rating = product.rating.rate;
      vm.productFields.category = product.category;
      vm.productFields.price = product.price;
    });
  },

  computed: {
    ...mapState(useProductStore, ["categories", "products"]),
  },

  components: { Form },
};
</script>
