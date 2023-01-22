<script setup>
import { ref,computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counter = computed(() => store.state.counter)

const num = ref(1)

const addToCounter = () => store.commit('addToCounter', num.value)
const subtractFromCounter = () => store.commit('subtractFromCounter', num.value)
const addRandomNumber = () => store.dispatch('addRandomNumber')

</script>

<template>
  <div class="count">
    <h1 class="counter">{{ counter }}</h1>
    <div>
      <button @click="subtractFromCounter">-</button>
      <input type="number" v-model="num">
      <button @click="addToCounter">+</button>
    </div>
    <div>
      <button class="btn" @click="addRandomNumber">Add by Random Number</button>
    </div>
  </div>
</template>

<style scoped>
.count {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.counter {
  font-size: 5rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
.btn{
  border-radius: 0.5rem;
  width: auto;
  background-color: #41B983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
</style>