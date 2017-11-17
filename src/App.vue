<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      transitionName:'router-pop-out'
    }
  },
  watch:{
    $route:function(to,from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        console.log(  )
        this.transitionName = toDepth < fromDepth ? 'router-pop-out' : 'router-pop-in'
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
  .router-pop-out-enter-active,
  .router-pop-out-leave-active,
  .router-pop-in-enter-active,
  .router-pop-in-leave-active {
    will-change: transform,opacity;
    transition: all 400ms;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
  }

  .router-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .router-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .router-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .router-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
