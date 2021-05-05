let mixin = {
  created: function(){
    this.hello()
  },
  
  methods: {
    hello: function(){
      console.log("Hello from mixin")
    }
  }
}


Vue.component('my-component-a', {
  mixins: [mixin],
  template: '<div class="my-component-a">Component A</div>'
});

Vue.component('my-component-b', {
  mixins: [mixin],
  template: '<div class="my-component-b">Component B</div>'
});



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

