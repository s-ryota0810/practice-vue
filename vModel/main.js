new Vue({
  el: '#app',
  data: {
    message : 'Vue',
    text: 'react',
    val: true,
    vals: [],
    valr: "",
    vall: "",
    valls: [],
    preview: ""
  },
  
  methods: {
    handleChange: function(event){
      let file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})
