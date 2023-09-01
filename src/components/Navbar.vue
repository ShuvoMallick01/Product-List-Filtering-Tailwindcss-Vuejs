<template>
  <nav class="border-gray-200 container mx-auto px-4">
    <div class="flex items-center justify-between mx-auto py-5">
      <router-link
        to="/"
        class="text-2xl font-bold whitespace-nowrap text-slate-200"
      >
        PRODUCT
      </router-link>

      <div class="" id="navbar-default">
        <ul class="font-medium flex gap-2 lg:gap-6">
          <li>
            <router-link
              to="/"
              class="py-2 pl-3 pr-4 text-white rounded md:bg-transparent dark:text-white hover:text-slate-400"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/createproduct"
              class="py-2 pl-3 pr-4 text-white rounded md:bg-transparent dark:text-white hover:text-slate-400"
              >Create Product</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
