let app = new Vue({
  el: "#app",
  data: {
    message: 'React',
    url: 'https://www.google.com'
  },
  
  mounted: function(){
    this.message = 'Vue'
  }
})