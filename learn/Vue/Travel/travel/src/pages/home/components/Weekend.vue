<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li>
        <div class="item-img-wrapper">
          <img class="item-img" src="https://img1.qunarzz.com/qs/2101/bb/ac1e1b5d1a66ca02.jpg">
        </div>
        <div class="item-info">
          <p class="item-title">test</p>
          <p class="item-desc">test</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding :.2rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
