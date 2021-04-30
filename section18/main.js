Vue.filter('localeNum', function(val){
  return val.toLocaleString()
})

let vue = new Vue({
  el: '#app',
  data: {
    price: 19800
  }
});