<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "../stores/todos";


const { filteredTodos } = storeToRefs(useTodosStore());
const { addTodo, toggleTodo, updateFilter } = useTodosStore();

const newTodo = ref("");

const addNewTodo = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
};

</script>

<template>
  <main>
    <div>
      <button @click="()=>updateFilter('all')">All</button>
      <button @click="()=>updateFilter('finished')">Finished</button>
      <button @click="()=>updateFilter('unfinished')">Unfinished</button>
    </div>
    <input type="text" v-model="newTodo">
    <button @click="addNewTodo">Add</button>
    <div v-for="todo in filteredTodos" :key="todo.id">
      <h1 :style="todo.isFinished && { textDecoration: 'line-through' }">{{ todo.text }}</h1>
      <button @click="toggleTodo(todo.id)">toggle</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 40px;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
