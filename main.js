let state = { count: 0 }
let app = new Vue({
  el: "#app",
  data: { 
    message: 'Vue js!',
    scroll: 0,
    count: 0
  },
  mounted: function() {
    this.scroll = 100
  },
  
  methods: {
    increment: function() {
      let vm = this
      setTimeout(function(){ vm.count++ }, 100)
    },
    
    decrement: function() {
      setTimeout(function() { this.count--}.bind(this), 1000)
    }
    
  }
})
