<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      >
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe615;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- common-gallary作为一插槽插入fade-animation -->
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@/components/common/gallary/Gallary'
import FadeAnimation from '@/components/common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleBannerClose: function () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  // 防止抖动
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.3rem
      padding 0 0.2rem
      text-align left
    .banner-number
      margin 0.1rem 0.1rem 0 0
      padding 0.1rem 0.2rem
      line-height 0.2rem
      height 0.2rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.28rem
      .banner-icon
        font-size 0.3rem
</style>
