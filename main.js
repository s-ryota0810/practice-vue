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
    bgColor:'lightgray',
    classObject: {
      child: true,
      'is-active': false
    },
    
    styleObject: {
      color: 'yellow',
      backgroundColor: 'lightgray'
    },
    
    item: {
      id: 1,
      src: 'dog.jpeg',
      alt: '犬の画像',
      width: 400,
      height: 200
    }
  
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
