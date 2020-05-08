<template>
<div  v-theme:cloumn="'narrow'" id="show-blog">
    <h1>all blog article</h1>
   <!-- <input type="text" v-model="search" placholder="search blogs">-->
  <div v-for="blog in blogs " class="single-blog" v-bind:key="blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article >{{blog.body | snippet}}</article>
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
