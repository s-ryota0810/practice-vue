let vue = new Vue({
  el: '#app',
  data: {
    video1: false
  },
  
  directives: {
    video(el, binding) {
      binding.value ? el.play() : el.pause()
    },
    
    focus: {
      inserted: function(el){
        el.focus()
      }
    }
  }
});