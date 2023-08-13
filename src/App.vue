<template>
  <main class="bg-gray-900 min-h-screen px-4">
    <div class="container mx-auto pt-8">
      <div class="bg-gray-800 py-5 rounded-xl mb-10 p-4">
        <ProductFilterActions />

        <ProductFilterViewer />
      </div>

      <div class="relative bg-gray-800 rounded-md">
        <ProductTable />
      </div>
    </div>
  </main>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {};
</script>
