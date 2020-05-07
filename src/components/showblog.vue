<template>
<div id="show-blog">
    <h1>all blog article</h1>
  <div v-for="blog in blogs" class="single-blog" v-bind:key="blog.id">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
  </div>
</div>
</template>

<script>
export default {
  
  data () {
    return {
      blogs:[]
    }
  },
  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs=data.body.slice(0,10);
      })
  }
}
</script>

<style scoped>
#show-blog{
    max-width:800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
  box-sizing:border-box;
    background:whitesmoke;
}
</style>
