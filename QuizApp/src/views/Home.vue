<script setup>
  import q from "../data/quizes.json"
  import { ref, watch } from 'vue'
  import Card from '../components/Card.vue'
  import { RouterView } from "vue-router";

  const quizes = ref(q)
  const search = ref('')

  watch(search, (newValue) => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(newValue.toLowerCase()))
  })

</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
  header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header h1{
    font-weight: bold;
  }
  header input{
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
    width: 50%;
  }  
  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  }

</style>
