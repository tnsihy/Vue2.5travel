<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
            </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/p/tts5/1709/bb/c6e9252911b72902.jpg_r_390x260x90_2d5de7a7.jpg',
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
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 60%
    .item-img
        width 100%
.item-info
    padding 0.1rem
    text-indent 0.1rem
    text-align left
    .item-title
        line-height 0.5rem
        font-size 0.32rem
        ellipsis()
    .item-desc
        line-height 0.5rem
        color #ccc
        ellipsis()
</style>
