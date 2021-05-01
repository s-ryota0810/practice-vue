//Vue.component('my-component', {
//  template: '<p>MyComponent</p>'
//}),

Vue.component('example', {
  template: '<p>{{ message }}</p>',
  
  data: function(){
    return {
      message: 'Hello Vue.js'
    }
  },
  
})

let MyComponent = {
  template: '<p>Example</p>'
};

new Vue ({
  el: "#app",
  components: {
    'my-component': MyComponent
  }
  
})