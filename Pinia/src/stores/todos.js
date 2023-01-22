import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: 'clean room',
        isFinished: false
      }
    ],
    filter: 'all'
  }),
  getters: {
    filteredTodos() {
      if(this.filter === 'finished'){
        return this.todos.filter(todo => todo.isFinished)
      } else if(this.filter === 'unfinished'){
        return this.todos.filter(todo => !todo.isFinished)
      } else {
        return this.todos;
      }
    }
  },
  actions: {
    addTodo(text) {
      if(!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 1000000),
        text,
        isFinished: false
      })
    },
    toggleTodo(id){
      const index = this.todos.findIndex(todo => todo.id === id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
    updateFilter(value){
      console.log(value)
      this.filter = value;
    }
  }
});
