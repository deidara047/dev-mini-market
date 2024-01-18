<style>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>

<template>
  <div class="flex justify-center">
    <UCard class="max-w-[2000px]">
      <h1 class="font-bold text-2xl">Login</h1>
      <UButton class="mt-2" color="blue" v-if="contentLoaded"><font-awesome-icon :icon="['fab', 'google']" /> Log In/Sign
        Up with Google</UButton>
      <div v-else class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const contentLoaded = ref(false);

useHead({
  title: "Log In | Dev Mini-Market"
});

onMounted(() => {
  contentLoaded.value = true;
})
</script>