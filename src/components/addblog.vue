<template>
<div id="add-blog">
    <h2>add new blog post</h2>
    <form v-if="!submitted">
        <label>blog title</label>
        <input type="text"  v-model="blog.title" required/>
        <label>blog content</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxes">
            <label>ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>
            <label>wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories"/>
            <label>mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories"/>
            <label>sara</label>
            <input type="checkbox" value="cheese" v-model="blog.categories"/>

        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author.id">{{author}}</option>
        </select>

        <button v-on:click.prevent="post">Add blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for ading the post</h3>
        </div>
    <div id="preview">
        <h3>preview blog</h3>
        <p>blog title:{{blog.title}}</p>
        <p>blog content:{{blog.content}}</p>
        
        <p>blog categories</p>
        <ul>
            <li  v-for="category in blog.categories" v-bind:key="category.id">{{category}}</li>
            </ul>
            <p>author:{{blog.author}}</p>
        </div>
</div>
</template>

<script>
export default {
  
  data () {
    return {
    blog:{
        title:"",
        content:"",
        categories:[]
    },
    authors:["ram","shyam","hari","gopal"],
    submitted:false,
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
              title:this.blog.title,
              body:this.blog.contnent,
              userID:1
          }).then(function(data){
              console.log(data);
              this.submitted=true;
          });
      }
  }

}
</script>

<style scoped>
#add-blog *{
    box-sizing:border-box;
}
#add-blog{
    margin:20px auto;
    max-width:500px;
}
label{
    display:block;
    margin:20px 0 10px;
}
input[type="text"],textarea{
    display:block;
    width:100%;
    padding:8px;

}
#preview{
    padding:10px 20px;
    bordeR:1px solid #ccc;
    margin:30px 0;
}
h3{
    margin-top:10px;
}
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
#checkboxes label{
    display:inline-block;
}
</style>
