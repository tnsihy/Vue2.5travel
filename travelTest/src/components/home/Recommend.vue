<template>
  <div>
    <div class="title">热销推荐</div>
    <div>
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
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
  font-size .3rem
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
      font-size 0.3rem
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
