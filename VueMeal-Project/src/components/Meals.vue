<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    type: Array,
    required: true
  }
})

</script>

