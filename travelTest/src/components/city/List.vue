<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
            <div class="button">北京</div>
            </div>
        </div>
        </div>

        <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
            </div>
        </div>
        </div>

        <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id">
            {{innerItem.name}}</div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
    overflow hidden
    position absolute
    top 1.68rem
    bottom 0
    left 0
    right 0
    .title
        font-size 0.26rem
        line-height 0.54rem
        background #eee
        padding-left 0.2rem
        color #666
        text-align left
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wrapper
            float left
            width 33.33%
            .button
                margin 0.1rem
                padding 0.1rem
                border-radius 0.06rem
                text-align center
                border 0.02rem solid #ccc
    .item-list
        .item
            line-height .64rem
            padding .08rem
            text-align left
            font-size .3rem
</style>
