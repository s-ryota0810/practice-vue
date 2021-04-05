let state = { count: 0 }
let app = new Vue({
  el: "#app",
  data: { 
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
  }
})

state.count++