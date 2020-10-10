import Vue from 'Vue';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Olá Vue!'
  },
  render (h) {
    return h('div', this.message)
  }
})
