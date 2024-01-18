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
      <div class="p-3 border mt-1 dark:border-gray-700 rounded-md shadow bg-green-50 dark:bg-green-950 max-h-[175px] overflow-y-auto edited-scrollbar">
        <p class="text-xs text-gray-500 dark:text-gray-400">GPT response:</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium ipsa modi doloribus perferendis
        praesentium culpa ut alias repellendus nam incidunt aspernatur, quam debitis corporis, ipsam, deserunt voluptate
        delectus aliquam est velit animi corrupti ea rerum repudiandae. Porro corporis laudantium exercitationem
        voluptatum distinctio veritatis facilis! Fuga vel quam suscipit, aliquid voluptates alias id ipsa velit sunt
        eveniet quaerat, deleniti sit non adipisci, dolor magnam voluptatem! Vero, laborum? Cum aspernatur veniam
        suscipit? Expedita nisi officiis omnis, similique fugit labore nostrum assumenda deleniti ullam impedit ipsum sint
        sapiente doloremque? Sint, quos voluptatum.</p>
      </div>
    </div>
    <hr class="dark:border-gray-800 mt-4 mb-2" />
    <div>
      <h2 class="font-bold mb-1">Items in my cart:</h2>
      <div class="overflow-y-auto edited-scrollbar max-h-[250px] border p-1 rounded dark:border-gray-800">
        <div class="flex flex-col gap-2">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div class="mt-3 flex justify-center">
        <UButton>Purchase</UButton>
      </div>
    </div>
  </div>
</template>