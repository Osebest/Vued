<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
import { truncateWords } from '../filters';

const { meal } = defineProps({
  meal: Object
})

</script>

<template>
  <div class="flex flex-col bg-white shadow rounded-xl hover:scale-105 transition-all mb-0 pb-0">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <v-img class="rounded-t-xl w-full h-60 object-cover bg-grey-lighten-2" aspect-ratio="1" :src="meal.strMealThumb" cover
        lazy-src="https://picsum.photos/10/6?image=35">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <!-- <img class="rounded-t-xl w-full h-60 object-cover" :src="meal.strMealThumb" :alt="meal.strMeal" /> -->
    </router-link>
    <div class="p-3 flex flex-col justify-between h-full">
      <div>
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ truncateWords(meal.strInstructions, 20) }}
        </p>
      </div>
      <div class="pb-3">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>