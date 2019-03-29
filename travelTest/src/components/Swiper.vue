<template>
<<<<<<< HEAD
  <div class="wrapper">
    <swiper :options="swiperOption" @someSwiperEvent="callback">
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img class="swiper-img" :src='item.imgUrl' />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
=======
<div class="wrapper">
<swiper :options="swiperOption">
<swiper-slide v-for="item of swiperList" :key="item.id">
<img class="swiper-img" :src="item.imgUrl">
</swiper-slide>
<div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
>>>>>>> origin/index-icons
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
<<<<<<< HEAD
      swiperList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/vc/d3/79/22/687da305c0ea0532a2c7d3cc23.jpg'
      }]
=======
      swiperList: [
        {
          id: '0001',
          imgUrl: '//img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg'
        },
        {
          id: '0002',
          imgUrl: '//img1.qunarzz.com/vc/d3/79/22/687da305c0ea0532a2c7d3cc23.jpg'
        }
      ]
>>>>>>> origin/index-icons
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
<<<<<<< HEAD
    background #fff
=======
  background #fff
>>>>>>> origin/index-icons
.wrapper
  overflow hidden
  width 100%
  height 0
<<<<<<< HEAD
  padding-bottom 31.25%
  background #eee
=======
  padding-bottom 30.53%
>>>>>>> origin/index-icons
  .swiper-img
    width 100%
</style>
