<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">All Products</h1>
    <!--div>
      <p class="mb-2">Search your product</p>
      <UInput icon="i-heroicons-magnifying-glass-20-solid" class="max-w-[350px]" size="md" color="white" :trailing="false"
        placeholder="Search..." />
    </div-->
    <hr />
    <div class="grid grid-cols-4 gap-5">
      <IngredientCard 
        v-for="ingred in ingredientsData.slice(rangePageData.init, rangePageData.final)"
        :key="ingred.ingredientId"
        :ingredient="ingred.ingredient"
        :id="ingred.ingredientId"
      />
    </div>
    <UPagination v-model="page" :page-count="8" :total="ingredientsData.length" />
  </main>
</template>

<script setup lang="ts">
import ingredientsData from "@/src/ingredients_data.json";

const page = ref(1);
const rangePageData = computed(() => {
  return {
    init: (8*(page.value)) - 8,
    final: ((8*page.value) - 1) <= ingredientsData.length ? 8*page.value : ingredientsData.length
  }
});

useHead({
  title: "All Products | Dev Mini-Market"
});
</script>