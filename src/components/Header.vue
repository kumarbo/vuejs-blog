<template>
    <header>
        <h1  v-on:click="changetitle">{{title}}</h1>
        
    </header>
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
        changetitle:function(){
//this.$emit('changetitle','vue wizards');
this.title='Vue wizards';
bus.$emit('titlechanged','Vue wizards');
        }
    }
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>