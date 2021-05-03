Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function(){
      this.$emit('childs-event')
    }
  }
  
});

new Vue ({
  el: "#app",
  data: {
    list: [
      { id: 1, name: 'スライム', hp:100 },
      { id: 2, name: 'ゴブリン', hp:200 },
      { id: 3, name: 'ドラゴン', hp:500 }
    ]
  },
  methods: {
    parentsMethod: function(){
      alert('イベントをキャッチ！')
    }
  }
  
})