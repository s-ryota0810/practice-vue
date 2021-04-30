new Vue({
  
  el: '#app',
  data: {
    price: 19800
  },
  
  filter: {
    localeNum: function(val) {
      return val.toLocaleString()
    }
  }
  
})