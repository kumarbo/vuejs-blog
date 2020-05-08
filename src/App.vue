<template>
<div>
    <show-blog></show-blog>
    <list-blogs></list-blogs>
</div>
</template>

<script>
import addblog from './components/addblog.vue';
import showblog from './components/showblog.vue';
import listblog from './components/showblog.vue';
export default {
    components:{
        'add-blog':addblog,
        'show-blog':showblog,
        'list-blogs':listblog
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
