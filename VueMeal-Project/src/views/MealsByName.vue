<script setup>
import { ref, computed, onMounted } from 'vue'
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';


const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  if(keyword.value === ''){
    store.commit('setSearchedMeals', [])
  } else {
    store.dispatch('searchMeals', keyword.value)
  } 
}

const searchedMeals = computed(() => {
  if(keyword.value !== '') {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchedMeals', [])
  } 
})

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
})

</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-6 text-orange-400">Search Meals by Name</h1>
  </div>
  <div class="p-8 pb-0 pt-4">
    <input @input="searchMeals" v-model="keyword"  type="text" class="p-3 rounded border-2 border-gray-200 w-full mb-6 focus:ring-orange-400 focus:border-orange-400"
      placeholder="Search for Meals" />
  </div>
  <Meals :meals="meals" />
</template>