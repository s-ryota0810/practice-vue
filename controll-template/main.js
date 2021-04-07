let app = new Vue({
  el: "#app",
  data: {
    message: 'React',
    msg: 'Hello <strong>Vue.js!<strong>',
    url: 'https://www.google.com'
  },
  
  mounted: function(){
    this.message = 'Hello Vue'
  }
})