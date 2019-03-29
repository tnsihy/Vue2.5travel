<template>
  <div>
    <div class="title">热销推荐</div>
    <div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/p/tts5/1803/52/f0bdeb873d1a3402.jpg_r_390x260x90_e9ac2738.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_256x160_5bd39fbd.jpg',
          title: '长隆野生动物世界',
          desc: '熊猫三胞胎，与您共享欢乐时光'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_256x160_097bc893.jpg',
          title: '长隆欢乐世界',
          desc: '垂直过山车等挑战你的青春荷尔蒙'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title
  margin-top 0.2rem
  line-height 0.8rem
  width 100%
  text-align left
  text-indent 0.4rem
  background #eee
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    min-width 0
    // 多字省略...样式
    padding 0.1rem
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      text-align left
      text-indent 0.1rem
      ellipsis()
    .item-desc
      line-height 0.5rem
      color #ccc
      text-indent 0.1rem
      text-align left
      ellipsis()
    .item-button
      line-height 0.5rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
      float left
      margin-left .1rem
</style>
