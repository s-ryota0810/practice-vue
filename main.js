let state = { count: 0 }
let app = new Vue({
  el: "#app",
  data: { 
    state: state 
  }
})

state.count++