new Vue({
  el: '#app',
  data: {
    count: 0,
    message:  "Hello Vue"
  },
  
  methods: {
    handleClick: function(){
      alert('test')
    },
    
    handleInput: function(event) {
      alert(this.message)
      this.message = event.target.value
    },
    
    handler: function(comment) {
      alert(comment)
    }
  }
  
})
