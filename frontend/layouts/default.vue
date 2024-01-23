<style>
.navlinks {
  transition: .2s ease all;
  @apply dark:hover:text-white text-gray-500 hover:text-black dark:text-gray-400 font-semibold
}

.navlinks.router-link-active {
  @apply border-b-2 border-black dark:border-white mb-[0.5px] text-black dark:text-white
}
</style>

<template>
  <div class="space-y-7 mb-10">
    <nav class="border-b border-gray-300 dark:border-gray-700">
      <UContainer class="py-3">
        <div class="flex justify-between items-center">
          <div>
            <NuxtLink :prefetch="true" class="flex font-bold text-2xl items-center space-x-2" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>
                DevMiniMarket
              </span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-6">
            <NuxtLink class="navlinks" :prefetch="true" to="/">Home</NuxtLink>
            <NuxtLink class="navlinks" :prefetch="true" to="/to-buy">To-Buy</NuxtLink>
            <NuxtLink class="navlinks" :prefetch="true" to="/all-products">All Products</NuxtLink>
            <NuxtLink class="navlinks" :prefetch="true" to="/login-or-signup">Log In/Sign Up</NuxtLink>
            <NuxtLink class="navlinks" :prefetch="true" to="/about">About</NuxtLink>
            <button @click="isCartModalOpen = true"
              class="dark:text-white dark:hover:text-gray-300 text-gray-700 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
            <DarkModeButton></DarkModeButton>
            <UDropdown :items="items" :popper="{ placement: 'bottom-end'}">
              <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            </UDropdown>
          </div>
        </div>
      </UContainer>
    </nav>
    <UContainer>
      <slot />
    </UContainer>
    <UModal v-model="isCartModalOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold flex gap-2 leading-6 text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span>Shopping Cart</span>
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isCartModalOpen = false" />
          </div>
        </template>

        <CartModalContent></CartModalContent>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const isCartModalOpen = ref(false);
const config = useRuntimeConfig();
const { account } = useAppWrite(config.public.appwriteProjectID);

const items = [
  [{
    label: 'View Profile',
    icon: 'i-heroicons-user-20-solid'
  }, {
    label: 'Log out',
    icon: 'i-heroicons-arrow-up-right-20-solid',
    click: () => {
      const promise = account.deleteSession('current');

      promise.then(function (response) {
          console.log(response); // Success
          navigateTo("/");
      }, function (error) {
          console.log(error); // Failure
      });
    }
  }]
];
</script>