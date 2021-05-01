Vue.component('my-component', {
  template: '<p><comp-child></comp-child></p>'
});

Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val']
  
});


let MyComponent = {
  template: '<p>Example</p>'
};

new Vue ({
  el: "#app",
  components: {
    'my-component': MyComponent
  }
  
})