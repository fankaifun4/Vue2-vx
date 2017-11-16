<template>
  <div id="app">
    <transition name="goin">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  watch:{
    $route:function(to,from){
      // console.log(to,from)
      // console.log(to.path.split('/'))
    }
  }
}
</script>
<style>
*{padding: 0;margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.goin-enter-active{
  animation: goin .5s;
}
.goin-leave-active{
  animation: golive .5s reverse;
}
/*.goin-enter{
   opacity: 0
}.goin-leave-to {
   opacity: 0
}*/
@keyframes goin
{
  from {left: -100%;}
  to {left: 0;}
}
@keyframes golive
{
  from {left: 0%;}
  to {left: 100%;}
}

</style>
