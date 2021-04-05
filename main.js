let state = { count: 0 }
let app = new Vue({
  el: "#app",
  data: { 
    message: 'Vue js!',
    scroll: 0,
    count: 0,
    
    isChild: false,
    isActive: true,
    textColor: 'red',
    bgColor:'lightgray'
  },
  mounted: function() {
    this.scroll = 100
  },
  
  methods: {
    increment: function() {
      let vm = this
      setTimeout(function(){ vm.count++ }, 100)
      vm.textColor = 'blue'
    },
    
    decrement: function() {
      setTimeout(function() { this.count--}.bind(this), 1000)
      this.bgColor = 'red'
    }
    
  }
})
