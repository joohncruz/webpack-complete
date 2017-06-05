<template>
  <div class="hello">
    <h2>\{{ msg }}</h2>
    <example2></example2>
  </div>
</template>

<script>

import Example2 from '../shared/example2/example2.vue'

export default {
  name: 'hello',
  components: {
    Example2
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
