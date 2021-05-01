let vue = new Vue({
  el: '#app',
  directives: {
    focus: {
      inserted: function(el){
        el.focus()
      }
    }
  }
});