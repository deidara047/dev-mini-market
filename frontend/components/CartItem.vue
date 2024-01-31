<template>
  <div class="border dark:border-gray-800 flex items-center rounded-md">
    <NuxtImg class="object-cover rounded-ss rounded-bl w-[80px] h-[80px] block"
      :src="item.imgUrl" :alt="item.name" />
    <div class="flex-grow flex items-center p-2.5">
      <div class="flex-grow">
        <p class="text-md font-bold capitalize">{{ item.name }}</p>
        <p class="text-gray-800 dark:text-gray-200">${{ item.price }}</p>
      </div>
      <div>
        <div class="flex gap-2 items-center">
          <div class="flex items-center gap-2">
            <UButton @click="decreaseAmount" color="gray">-</UButton>
            <span>{{ amount }}</span>
            <UButton @click="increaseAmount" color="gray">+</UButton>
          </div>
          <div>
            <UButton color="red" class="py-2" @click="onDeleteButtonClicked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                  clip-rule="evenodd" />
              </svg>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const amount = ref(1);

// Copied from @/stores/cart.ts
interface CartItm { 
  id: number, 
  name: string, 
  imgUrl: string, 
  price: string
}

const props = defineProps({
  cartItem: {
    type: Object,
    required: true
  }
})

const item = computed(() => {
  return props.cartItem as CartItm;
});

function onDeleteButtonClicked() {
  cartStore.deleteById(item.value.id);
}

function increaseAmount() {
  amount.value++;
}

function decreaseAmount() {
  if(amount.value > 1) {
    amount.value--;
  }
}
</script>