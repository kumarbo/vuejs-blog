<template>
    <footer>
        <p >Copyright 2017 {{ title }}</p>
       
    </footer>
</template>
<script>
import {bus} from '../main';

export default {
   props:{
        title:{
            type:String
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
      
    },
    created(){
        bus.$on('titlechanged',(data)=>{
            this.title=data;
        })
    }
}
</script>
<style scoped>
footer{
    background: whitesmoke;
    padding: 6px;
}
p{
        color: black;
        text-align: center;
}
</style>