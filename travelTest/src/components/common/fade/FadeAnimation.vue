<template>
    <div>
        <transition>
            <!-- 大图渐隐动画 -->
            <slot></slot>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
// 渐隐渐显
.v-enter,.v-leave-to
    opacity 0
.v-enter-active,.v-leave-active
    transition opacity .5s
</style>
