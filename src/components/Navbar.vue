<template>
  <div class="blog-masthead">
    <div class="container">
      <nav class="blog-nav">
        <router-link :to="{name: 'ArticleIndex'}" class="blog-nav-item active">Home</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
