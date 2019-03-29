<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
<<<<<<< HEAD
=======
    <home-icons></home-icons>
>>>>>>> origin/index-icons
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
<<<<<<< HEAD
=======
import HomeIcons from '@/components/Icons'
>>>>>>> origin/index-icons

export default {
  name: 'App',
  components: {
    HomeHeader,
<<<<<<< HEAD
    HomeSwiper
=======
    HomeSwiper,
    HomeIcons
>>>>>>> origin/index-icons
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
