Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function(){
      this.$emit('childs-event')
    }
  }
  
});

Vue.component('child-comp', {
  template: '<li>{{ name }} HP.{{ hp }}\
    <button v-on:click="doAttack">攻撃する</button></li>',
  props: { id: Number, name: String, hp: Number },
  methods: {
    doAttack: function() {
      this.$emit('attack', this.id)
    }
  }
})

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
    },
    
    handleAttack: function(id) {
      let item = this.list.find(function(el) {
        return el.id === id
      })
      
      if (item !== undefined && item.hp > 0) item.hp -= 10
    }
  }
  
});

let bus = new Vue ({
  data: {
    count: 0
  }
})

Vue.component('component-b', {
  template: '<p>bus: {{ bus.count }}</p>',
  computed: {
    bus: function() { return bus.$data }
  },
  created: function() {
    bus.$on('bus-event', function(){
      this.count++
    })
  }
})