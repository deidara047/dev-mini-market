<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">All Products</h1>
    <div>
      <p class="mb-2">Search your product</p>
      <UInput icon="i-heroicons-magnifying-glass-20-solid" class="max-w-[350px]" size="md" color="white" :trailing="false"
        placeholder="Search..." />
    </div>
    <hr />
    <div class="grid grid-cols-4 gap-5">
      <IngredientCard />
      <IngredientCard />
      <IngredientCard />
      <IngredientCard />
      <IngredientCard />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "All Products | Dev Mini-Market"
});
</script>