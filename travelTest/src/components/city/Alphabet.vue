<template>
  <ul class="list">
      <li class="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart.prevent = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        :ref = 'item'
      >{{item}}
      </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offestTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
*
  touch-action pan-y
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
        line-height .4rem
        color $bgColor
</style>
