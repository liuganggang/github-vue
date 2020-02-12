<template>
  <div>
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-8 blog-main"></div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'ArticleShow',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar
  }
}
</script>
