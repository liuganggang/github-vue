<template>
  <div>
    <Navbar></Navbar>

    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title">{{title}}</h1>
        <p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
      </div>

      <div class="row">
        <div class="col-sm-8 blog-main">
          <div class="blog-post">
            <p class="blog-post-meta"> by {{created_at}}</p>

            <div v-html='content'></div>
          </div>
        </div>
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
      title: '',
      content: '',
      created_at: ''
    }
  },
  components: {
    Navbar
  },
  mounted () {
    let url = '/api/v1/articles/show?id=' + this.$route.params.id
    this.$http.get(url).then(
      response => {
        console.info('****', response.body)
        let article = response.body.article
        this.title = article.title
        this.content = article.content
        this.created_at = article.created_at
      }, response => {
        console.error(response)
      }
    )
  }
}
</script>
