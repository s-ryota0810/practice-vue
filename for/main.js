let app = new Vue({
  el: "#app",
  data: {
    name: 'キマイラ',
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ]
  },
  
  methods: {
    doAdd: function() {
      let max = this.list.reduce(function(a,b) {
        return a > b.id ? a : b.id
      },0)
      
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    }
  }
})