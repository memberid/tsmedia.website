import Vue from 'vue'
import vuescroll from 'vuescroll'

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: 'myScroll', // customize component name, default -> vueScroll
})

Vue.component('Vuescroll', vuescroll)
