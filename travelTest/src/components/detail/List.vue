<template>
  <div>
      <div class="item" v-for="(item,index) of list" :key="index">
          <div class="item-title border-bottom">
              <span class="item-title-icon"></span>
              {{item.title}}
          </div>
          <div v-if="item.children" class="item-children">
              <!-- 递归 传给自己 -->
              <detail-list :list="item.children"></detail-list>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    text-align left
    .item-title-icon
        position relative
        top .03rem
        display inline-block
        width .36rem
        height .36rem
        background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.26rem no-repeat
        background-size .4rem 2.3rem
        margin-right .1rem
.item-children
    padding 0 .2rem
</style>
