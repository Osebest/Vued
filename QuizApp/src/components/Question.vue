<script setup>
  import { defineProps, defineEmits } from 'vue'

  const emit = defineEmits(['selectOption'])
  const { question } = defineProps(['question'])

  const emitSelectedOption = (isCorrect) => {
    emit('selectOption', isCorrect)
  }

</script>

<template>
  <div class="question-container">
    <h1 class="question">
      {{ question.text }}
    </h1>
  </div>
  <div class="options-container">
    <div 
      v-for="option in question.options" 
      :key="option.id" 
      class="options"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="options-label">{{ option.label }}</p>
      <div class="options-value">
        <p>{{option.text}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .question-container{
    margin-top: 30px;
  }
  .question{
    font-size: 40px;
    margin-bottom: 20px;
  }
  .options{
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .options-label{
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .options-value{
    background-color: rgb(244,239,239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
  }
</style>