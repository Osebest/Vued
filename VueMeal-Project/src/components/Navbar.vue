<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'Home' }" class="inline-flex items-center h-full px-8 text-orange-400 font-bold text-2xl">Home</router-link>
    <div class="px-8">
      <router-link :to="{ name: 'byName' }"
        class="rounded-md  inline-flex items-center px-3 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">Search Meals</router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="rounded-md  inline-flex items-center px-3 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">Meals By Letter</router-link>
      <router-link :to="{ name: 'ingredients' }"
        class="rounded-md  inline-flex items-center px-3 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">Meals By
        Ingredients</router-link>
    </div>
  </header>
</template>