Vue.component('my-component', {
  template: '<p><comp-child></comp-child></p>',
  
});

Vue.component('comp-child', {
  template: '<list>{{ name }} HP.{{ hp }}</list>',
  props: ['name', 'hp']
  
});


let MyComponent = {
  template: '<p>Example</p>'
};

new Vue ({
  el: "#app",
  data: {
    list: [
      { id: 1, name: 'スライム', hp:100 },
      { id: 2, name: 'ゴブリン', hp:200 },
      { id: 3, name: 'ドラゴン', hp:500 }
    ]
  },
  components: {
    'my-component': MyComponent
  }
  
})