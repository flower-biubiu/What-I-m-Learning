<template>
<div class="header">
    <div class="header-left"><span class="iconfont">&#xe6d5;</span></div>
    <div class="header-input"><span class="iconfont">&#xe6e0;</span>输入城市/景点/游玩/主题</div>
    <div class="header-right">城市<span class="iconfont">&#xe6ce;</span></div>
</div>

</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    display:flex
    line-height: .86rem
    background : $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex : 1
      height: .64rem;
      line-height :.64rem;
      margin-top :.12rem;
      margin-left :.2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align :center
</style>
