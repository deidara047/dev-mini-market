<template>
  <UCard>
    <div class="flex justify-center">
      <NuxtImg style="object-fit: cover;"
        :src="`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.replace(/\s/g, '-')}.jpg`"
        :alt="ingredient.replace(/\s/g, '-')" class="w-full h-[220px] rounded" :preload="true" />
    </div>

    <template #footer>
      <div class="flex flex-col gap-1">
        <p class="font-bold text-xl capitalize">{{ props.ingredient }}</p>
        <p class="dark:text-gray-300">${{ (props.id > 10000 ? props.id / 10000 : (props.id > 100 ? props.id / 100 :
          props.id)).toFixed(2) }}</p>
        <div class="mt-1">
          <UButton 
            class="w-full flex justify-center" 
            :disabled="productByIdExistsOnCart(props.id)" 
            @click="onButtonClicked"
            :color="productByIdExistsOnCart(props.id) ? 'indigo' : 'green'" 
            :variant="productByIdExistsOnCart(props.id) ? 'outline' : 'solid'"
          >
            <template v-if="productByIdExistsOnCart(props.id)">
              In cart
            </template>
            <template v-else>
              + Add to cart
            </template>
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const cartStore = useCartStore();
const { productByIdExistsOnCart } = storeToRefs(cartStore);

const props = defineProps({
  ingredient: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

function onButtonClicked() {
  if (userStore.fetchState === "failure") {
    alert("First you need to log in!");
    navigateTo("/login-or-signup");
  } else {
    cartStore.addToCart({
      id: props.id,
      name: props.ingredient,
      imgUrl: `https://spoonacular.com/cdn/ingredients_100x100/${props.ingredient.replace(/\s/g, '-')}.jpg`,
      price: (props.id > 10000 ? props.id / 10000 : (props.id > 100 ? props.id / 100 : props.id)).toFixed(2)
    })
  }
}
</script>