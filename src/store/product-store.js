import { defineStore } from "pinia";
import { categories } from "../data/categories";
import { products } from "../data/products";

export const useProductStore = defineStore("products", {
  state: () => ({
    categories: [...categories],
    products: [...products],
    filter: { category: "", sort: "", rating: "", search: "" },
    selected: [],
    createProduct: { title: "", price: "", category: "", rating: { rate: "" } },
    editId: null,
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
    handleCreateProduct(product, productId) {
      if (this.editId) {
        this.products = this.products.map((product) =>
          product.id === this.editId
            ? {
                ...product,
                title: this.createProduct.title,
                price: this.createProduct.price,
                category: this.createProduct.category,
                rating: { rate: this.createProduct.rating.rate },
              }
            : product
        );

        this.createProduct = {
          title: "",
          price: "",
          category: "",
          rating: { rate: "" },
        };
        this.editId = "";
      } else {
        this.products.push(product);
        console.log(product);

        this.createProduct = {
          title: "",
          price: "",
          category: "",
          rating: { rate: "" },
        };
      }
    },

    // Product Edit
    handleProductEdit(productId) {
      this.editId = productId;
      let findProduct = this.products.find((pro) => pro.id === productId);

      this.createProduct.title = findProduct.title;
      this.createProduct.price = findProduct.price;
      this.createProduct.category = findProduct.category;
      this.createProduct.rating.rate = findProduct.rating.rate;
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
