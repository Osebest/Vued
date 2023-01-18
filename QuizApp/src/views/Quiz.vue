<script setup>
  import Question from '../components/Question.vue';
  import QuizHeader from '../components/QuizHeader.vue';
  import Result from '../components/Result.vue';
  import { useRoute } from 'vue-router';
  import { ref, computed } from 'vue';
  import quizes from "../data/quizes.json";

  const route = useRoute();
  const quizId = parseInt(route.params.id);
  const currentQuestionIndex = ref(0);
  const numberOfCorrectAnswers = ref(0);
  const showResults = ref(false);

  const quiz = quizes.find(q => q.id === quizId);

  const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
  const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`);

  const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
      numberOfCorrectAnswers.value++;
    }
    if (currentQuestionIndex.value === quiz.questions.length - 1) {
      showResults.value = true;
    }
    currentQuestionIndex.value++;
  }

</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
    <div>
      <Question v-if="!showResults" @selectOption="onOptionSelected" :question="quiz.questions[currentQuestionIndex]"/>
      <Result 
        v-else
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        :quizQuestionLength="quiz.questions.length"
      />
    </div>

  </div>
</template>
