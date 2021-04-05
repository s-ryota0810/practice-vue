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
      this.count += 1
    },
    
    decrement: function() {
      this.count -= 1
    }
  }
})
