<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }
</script>

<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </main>
</template>

<style scoped>
  main{
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div{
    text-align: center;
  }
</style>
