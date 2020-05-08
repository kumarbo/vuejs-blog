<template>
<div  v-theme:cloumn="'narrow'" id="show-blog">
    <h1>list blog article</h1>
   <input type="text" v-model="search" placeholder="search blogs">

  <div v-for="blog in filteredBlogs " class="single-blog" v-bind:key="blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    
  </div>
</div>
</template>

<script>
import searchmixin from '../mixins/searchmixin';
export default {
  
  data () {
    return {
      blogs:[],
      search:''
      
    }
  },
  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs=data.body.slice(0,10);
      })
  },
 
  //register-locally
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  mixins: [searchmixin]
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
