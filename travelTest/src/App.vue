<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
