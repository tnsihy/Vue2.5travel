<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://imgs.qunarzz.com/p/tts7/1705/cf/685989276021f702.jpg_r_390x260x90_4e0f60f3.jpg"
      >
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe615;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/components/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/p/tts7/1705/cf/685989276021f702.jpg_r_390x260x90_4e0f60f3.jpg',
        'https://imgs.qunarzz.com/p/tts8/1604/50/143379bc0221c2f7.jpg_r_390x260x90_6c731f40.jpg',
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/52342bc8-765b-4aa8-b26c-3c3bf8eb184a.jpg_r_390x260x90_369bf229.jpg']
    }
  },
  components: {
    CommonGallary
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
