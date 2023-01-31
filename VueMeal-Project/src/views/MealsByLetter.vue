<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);


onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
})

</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-6 text-orange-400">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap gap-4 justify-center mt-4 px-4">
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"
      class="bg-orange-200 text-gray-700 mb-8 shadow p-3 w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>