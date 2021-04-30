let vue = new Vue({
  el: '#app',
  data: {
    price: 19800,
    message: 'Vue',
    foo: '='
  },
  
  filters: {
    LocaleNum: function(val) {
      return val.toLocaleString()
    },
    
    filter: function(message, foo, num) {
      console.log(message, foo, num)
    },
    
    round: function(val){
      return Math.round(val * 100) / 100
    },
    
    radian: function(val) {
      return val * Math.PI / 180
    }
  }
});