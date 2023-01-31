<template>
  <Popover class="relative absolute bg-white z-40">
    <div class="mx-auto max-w-7xl px-2">
      <div class="flex items-center justify-between border-b-2 border-gray-100 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1 py-4">
          <router-link :to="{ name: 'Home' }" class="px-8 text-orange-400 font-bold text-2xl">Home</router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden px-4">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-orange-400 hover:bg-orange-200 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-orange-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <router-link :to="{ name: 'byName' }"
            class="rounded-md px-3 transtion-colors py-4 text-gray-600 hover:bg-orange-400 hover:text-white text-xl links">Search
            Meals</router-link>
          <router-link :to="{ name: 'byLetter' }"
            class="rounded-md px-3 transtion-colors py-4 text-gray-600 hover:bg-orange-400 hover:text-white text-xl links">Meals
            By Letter</router-link>
          <router-link :to="{ name: 'ingredients' }"
            class="rounded-md px-3 transtion-colors py-4 text-gray-600 hover:bg-orange-400 hover:text-white text-xl links">Meals
            By
            Ingredients</router-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus
        class="absolute h-[100vh] rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 m-2 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 ">
          <div class="px-8 pt-5 pb-4">
            <div class="flex items-center justify-between">
              <div>
                <router-link :to="{ name: 'Home' }"
                  class="inline-flex items-center h-full text-orange-400 font-bold text-2xl">
                  <PopoverButton>Home</PopoverButton>
                </router-link>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-orange-400 hover:bg-orange-200 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-orange-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="space-y-6 py-4 px-5">
            <div class="flex flex-col">
              <router-link :to="{ name: 'byName' }"
                class="rounded-md px-3 py-4 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">
                <PopoverButton>Search Meals</PopoverButton>
              </router-link>
              <router-link :to="{ name: 'byLetter' }"
                class="rounded-md px-3 py-4 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">
                <PopoverButton>Meals By Letter</PopoverButton>
              </router-link>
              <router-link :to="{ name: 'ingredients' }"
                class="rounded-md px-3 py-4 transtion-colors h-full text-gray-600 hover:bg-orange-400 hover:text-white text-xl">
                <PopoverButton>Meals By Ingredients</PopoverButton>
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>


<style scoped>
.links {
  white-space: nowrap;
}
</style>