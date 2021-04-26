new Vue({
  
  el: '#app',
  data: {
    width: 800
  },
  
  computed: {
    halfWidth: {
      get: function(){ return this.width / 2 },
      set: function(val){ this.width = val * 2 }
    },
    
    computedData: function(){
      return Math.random()
    }
  },
  
  methods: {
    methodsData: function(){
      return Math.random()
    }
  }
})