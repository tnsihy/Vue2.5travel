<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div>
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title
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
