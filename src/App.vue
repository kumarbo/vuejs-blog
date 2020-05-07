<template>
    <show-blog></show-blog>
    
</template>

<script>
import addblog from './components/addblog.vue';
import showblog from './components/showblog.vue';
export default {
    components:{
        'add-blog':addblog,
        'show-blog':showblog
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
