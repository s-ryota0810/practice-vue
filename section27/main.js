Vue.component('my-component-a', {
  template: '<div class="my-component-a">Component A</div>'
})

Vue.component('my-component-b', {
  template: '<div class="my-component-b">Component B</div>'
})

new Vue ({
  el: "#app",
  data: {
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0
  },
  computed: {
    component: function(){
      return this.componentTypes[this.current]
    }
  }
  
});

