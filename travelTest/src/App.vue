<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
import HomeRecommend from '@/components/Recommend'
import HomeWeekend from '@/components/Weekend'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
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
