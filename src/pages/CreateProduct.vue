<template>
  <section class="container mx-auto px-4 py-5">
    <h2 class="text-slate-200 text-2xl py-5 mb-5 font-semibold">
      Create Product
    </h2>

    <!-- Form -->
    <form @submit.prevent="createForm">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="productName"
          id="productName"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="createProduct.title"
        />
        <!-- :value="createProduct.title" @input="createProduct.title =
        $event.target.value" -->

        <label
          for="productName"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Product Name</label
        >
      </div>

      <!-- Rating and Category -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <!-- Rating -->
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="productRating"
            id="productRating"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            v-model="createProduct.rating.rate"
          />

          <label
            for="productRating"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Product Rating</label
          >
        </div>

        <!-- Rating -->
        <!-- <div class="relative z-0 w-full mb-6 group">
          <select
            id="rating"
            class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-400 border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
            required
            v-model="createProduct.rating.rate"
          >
            <option
              class="text-gray-600 disabled:text-slate-400"
              disabled
              selected
              value=""
            >
              Rating
            </option>
            <option
              class="text-gray-600"
              v-for="num in 5"
              :value="num"
              :key="num"
            >
              {{ num }}
            </option>
          </select>
        </div> -->

        <!--  Category -->
        <div class="relative z-0 w-full mb-6 group">
          <select
            id="rating"
            class="block py-2.5 capitalize px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-400 border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
            required
            v-model="createProduct.category"
          >
            <option
              class="text-gray-600 disabled:text-slate-400"
              disabled
              selected
              value=""
            >
              Category
            </option>
            <option
              class="text-gray-600 capitalize"
              v-for="category in categories"
              :value="category"
              :key="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>

      <!-- Price -->
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="number"
          step="0.01"
          name="productPrice"
          id="productPrice"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="createProduct.price"
        />

        <label
          for="productPrice"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Product Price</label
        >
      </div>

      <button
        type="submit"
        class="text-white me-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>

      <!-- <router-link
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        to="/"
      >
        Go Back
      </router-link> -->
    </form>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "../store/product-store";

export default {
  data() {
    return {};
  },

  methods: {
    createForm() {
      let product = {
        id: Number(this.products.length) + 1,
        title: this.createProduct.title,
        price: this.createProduct.price,
        description: "NA",
        category: this.createProduct.category,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: this.createProduct.rating.rate, count: 120 },
      };

      this.handleCreateProduct(product);
      this.$router.push("/");
    },

    ...mapActions(useProductStore, ["handleCreateProduct"]),
  },

  computed: {
    ...mapWritableState(useProductStore, ["createProduct"]),
    ...mapState(useProductStore, ["categories", "products", "createProduct"]),
  },
};
</script>
