<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})

</script>

<template>
  <div class="w-3/4 md:w-2/4 mx-auto py-8">
    <h1 class="text-center text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <v-img class="mx-auto bg-grey-lighten-2" aspect-ratio="1" :src="meal.strMealThumb" cover
      lazy-src="https://picsum.photos/10/6?image=35">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <div class="flex flex-wrap justify-around">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
    </div>
    <div class="my-3">
      <h2 class="text-2xl font-semibold mb-2">Instructions</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <YouTubeButton :href="meal.strYoutube" />
      <a :href="meal.strSource" target="_blank"
        class="ml-8 px-3 py-2 rounded border-2 bg-orange-600 text-white border-orange-600 hover:bg-red-700 transition-colors">View
        Original Source</a>
    </div>
  </div>
</template>