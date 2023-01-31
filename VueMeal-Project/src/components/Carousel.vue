<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 5; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>


<template>
  <v-carousel cycle height="450" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(meal, i) in meals" :key="i" :src="meal.strMealThumb" cover
      lazy-src="https://picsum.photos/10/6?image=35" aspect-ratio="1">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
      <div class="d-flex fill-height justify-center align-start text-slate-300">
        <div class="text-h2 txt text-center">
          {{ meal.strMeal }}
        </div>
      </div>
    </router-link>
    </v-carousel-item>
  </v-carousel>
</template>

<style>
.txt {
  color: orange;
  mix-blend-mode: exclusion;
}
</style>