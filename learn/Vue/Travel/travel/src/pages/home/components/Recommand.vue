<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <img  class="item-img" src="https://img1.qunarzz.com/qs/2101/bb/ac1e1b5d1a66ca02.jpg">
        <div class="item-info">
          <p class="item-title">test</p>
          <p class="item-desc">test</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand'
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
      color black
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
