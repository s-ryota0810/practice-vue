//Vue.component('my-component', {
//  template: '<p>MyComponent</p>'
//}),

let MyComponent = {
  template: '<p>Example</p>'
};

new Vue ({
  el: "#app",
  components: {
    'my-component': MyComponent
  }
  
})