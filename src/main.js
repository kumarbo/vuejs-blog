import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
//router
Vue.use(VueResource);
Vue.use(VueRouter);

 const router=new  VueRouter({
routes:routes,
mode:'history'
 });

export const  bus=new Vue();



Vue.filter('snippet',function(value){
  return value.slice(0,100);
  });

//custom directive
Vue.directive('rainbow',{
bind(el,binding,vnode){
el.style.color="#" + Math.random().toString().slice(2,8);
}
});

Vue.directive('theme',{
  bind(el,binding,vnode){
  if(binding.value=='wide'){
    el.style.maxWidth="1200px";
  }else if(binding.value=='narrow'){
    el.style.maxWidth="500px";
  }
  if(binding.arg=='cloumn'){
    el.style.background='#2223';
    el.style.padding='20px';
  }
  }
  });
  

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
