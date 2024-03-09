<style>
.edited-scrollbar::-webkit-scrollbar {
  width: 7px;
}

.edited-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 6px;
  @apply dark:bg-gray-600 bg-gray-400;
}

.edited-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply dark:bg-gray-700 bg-gray-500;
}
</style>

<template>
  <div>
    <div class="flex flex-col gap-2">
      <p>Ask GPT what delicious dishes you can make with the ingredients you have in your shopping cart.</p>
      <UButton class="w-fit">
        Ask GPT
      </UButton>
      <div
        class="p-3 border mt-1 dark:border-gray-700 rounded-md shadow bg-green-50 dark:bg-green-950 max-h-[165px] overflow-y-auto edited-scrollbar">
        <p class="text-xs text-gray-500 dark:text-gray-400">GPT response:</p>
        <p>As you well know, OpenAI API and its services are paid, therefore, now, I cannot, at the moment, access those services. The day I can I will do it and implement it I promise.</p>
      </div>
    </div>
    <hr class="dark:border-gray-800 mt-4 mb-2" />
    <div>
      <h2 class="font-bold mb-1">Items in my cart:</h2>
      <div class="overflow-y-auto edited-scrollbar max-h-[250px] border p-1 rounded dark:border-gray-800">
        <div class="flex flex-col gap-2">
          <template v-if="cartStore.cartItems.length > 0">
            <CartItem v-for="crtItem in cartStore.cartItems" 
              :key="crtItem.id"
              :cart-item="crtItem"
              />
          </template>
          <template v-else>
            <div class="flex flex-col items-center py-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>No items in your cart yet.</p>
            </div>
          </template>
        </div>
      </div>
      <div class="mt-3 flex justify-center">
        <UButton @click="onPurchaseButtonClicked" :disabled="cartStore.cartItems.length === 0">Purchase</UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();

function onPurchaseButtonClicked() {
  cartStore.cleanCart();
  alert("Your purchase has been made successfully. (history won't be saved anywhere, remember, we are just pretending to buy products)");
}
</script>