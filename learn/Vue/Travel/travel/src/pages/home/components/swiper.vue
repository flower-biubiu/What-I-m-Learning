<template>
  <div class='wrapper'>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key= item.id>
        <img
          class = "swiper-img"
          :src = item.imgUrl
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
        // Some Swiper option/callback...
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/qs/2101/bb/ac1e1b5d1a66ca02.jpg'
      },
      {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/qs/2101/26/bd4db8b1e8de6302.jpg'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 48%
    overflow: hidden
    background: #eee
    .swiper-img
      width: 100%
</style>
