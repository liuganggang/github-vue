<template>
  <div>
    <Navbar title="home"></Navbar>

    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title">The Bootstrap Blog</h1>
        <p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <p v-for="article in articles" :key="article.id">
            <strong>{{article.id}}</strong>
            <router-link :to="{name: 'ArticleShow', params: {id: article.id} }">
              {{article.title}}
            </router-link>
          </p>
        </div>
        <div class="col-sm-3">123123123</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'ArticleIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articles: []
    }
  },
  components: {
    Navbar
  },
  mounted () {
    this.$http.get('/api/v1/articles').then(
      response => {
        console.info('res.body is ', response.body)
        this.articles = response.body.articles
      }, response => {
        console.error(response)
      }
    )
  }
}
</script>
<style scoped>
  p {
    font-size: 18px;
  }
</style>
