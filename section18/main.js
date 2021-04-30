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
    }
  }
});