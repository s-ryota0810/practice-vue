let state = { count: 0 }
let app = new Vue({
  el: "#app",
  data: { 
    message: 'Vue js!',
    scroll: 0
  },
  mounted: function() {
    this.scroll = 100
  }
})
