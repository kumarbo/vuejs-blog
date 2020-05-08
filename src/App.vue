<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
</div>
</template>

<script>
import addblog from './components/addblog.vue';
import showblog from './components/showblog.vue';
import listblog from './components/showblog.vue';
import head from './components/head.vue';
export default {
    components:{
        'add-blog':addblog,
        'show-blog':showblog,
        'list-blogs':listblog,
        'app-header':head
    },
 
  data () {
    return {
    
    }
  },
  methods:{

  }

  
}
</script>

<style scoped>

</style>
