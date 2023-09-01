import { defineStore } from "pinia";
import { categories } from "../data/categories";
import { products } from "../data/products";

export const useProductStore = defineStore("products", {
  state: () => ({
    categories: [...categories],
    products: [...products],
    filter: { category: "", sort: "", rating: "", search: "" },
    selected: [],
    createProduct: { title: "", price: "", category: "", rating: "" },
  }),

  getters: {
    filterProducts() {
      let filterProducts = [...this.products];

      // Category Filter
      if (this.filter.category) {
        filterProducts = filterProducts.filter(
          (product) => product.category === this.filter.category
        );
      }

      // Price Filter
      if (this.filter.sort) {
        filterProducts = filterProducts.sort((a, b) => {
          if (this.filter.sort === "low-high") {
            return a.price - b.price;
          } else if (this.filter.sort === "high-low") {
            return b.price - a.price;
          }
        });
      }

      // Rating Filter
      if (this.filter.rating) {
        filterProducts = filterProducts.filter(
          (product) =>
            Math.round(product.rating.rate) === Number(this.filter.rating)
        );

        // filterProducts = filterProducts.filter((product) =>
        //   console.log(
        //     Math.round(product.rating.rate),
        //     Number(this.filter.rating)
        //   )
        // );
      }

      // Search Filter
      if (this.filter.search) {
        filterProducts = filterProducts.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(this.filter.search.toLocaleLowerCase())
        );
      }

      return filterProducts;
    },
  },

  actions: {
    // Create Product
    handleCreateProduct(product) {
      // console.log(product, productId);
      // let product = {
      //   id: Number(this.products.length) + 1,
      //   title: this.createProduct.title,
      //   price: this.createProduct.price,
      //   description: "NA",
      //   category: this.createProduct.category,
      //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      //   rating: { rate: this.createProduct.rating, count: 120 },
      // };
      this.products.push(product);
      console.log(this.products[this.products.length - 1]);
      this.createProduct = { title: "", price: "", category: "", rating: "" };
      // console.log(productId);
    },

    // Filter Delete
    handleFilterDelete(filterKey) {
      this.filter[filterKey] = "";
    },

    // Product Delete
    async handleProductDelete(productId) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );

      // const { isConfirmed } = await this.$swal("Hi there");
      // console.log(isConfirmed);

      // if (isConfirmed) {
      //   this.products = this.products.filter(
      //     (product) => product.id !== productId
      //   );
      // }
    },

    // Select Product Delete
    async handleSelectedProductDelete() {
      this.products = this.products.filter(
        (product) => !this.selected.includes(product.id)
      );
      this.selected = [];

      // const { isConfirmed } = await this.$swal("Hi there");

      // if (isConfirmed) {
      //   this.products = this.products.filter(
      //     (product) => !this.selected.includes(product.id)
      //   );
      //   this.selected = [];
      // }
    },

    handleSelectedAll(e) {
      if (e.target.checked) {
        this.selected = this.filterProducts.map((item) => item.id);
      } else this.selected = [];
      console.log(this.selected);
    },

    handleSelect(e, productId) {
      if (e.target.checked) {
        this.selected.push(productId);
      } else {
        this.selected = this.selected.filter((proId) => proId != productId);
      }
    },
  },
});
