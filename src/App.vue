<template>
  <div id="app">
    <g-header></g-header>
    <transition :name="transitionName">
      <router-view/>    
    </transition>
  </div>
</template>

<script>
import GHeader from "@/components/global/header"
export default {
  name: 'App',
  data(){
    return {
      transitionName:'slide-left'
    }
  },
  watch:{
    '$route'(to,from){
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right':'slide-left';
    }
  },
  components:{
    GHeader:GHeader
  }
}
</script>

<style>
@import "./assets/css/global.css";

html,body{
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  text-align: center;
  color: #2c3e50;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active
 {
  will-change: transform;
  transition: all 1000ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform:translate3d(-10%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform:translate3d(10%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform:translate3d(10%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform:translate3d(-10%, 0, 0);
}
</style>
