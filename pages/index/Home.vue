<template lang="pug">
.rightblock
  swiper(:options="swiperOption" ref="mySwiper" @someSwiperEvent="callback")
    swiper-slide
      img(src="~static/port-works/banner04.png")
    swiper-slide
      img(src="~static/port-works/banner07.png")
    swiper-slide
      img(src="~static/port-works/banner05.png")
    .swiper-pagination(slot="pagination")
  br
  br
  h1.section-title Loxi Portfolio
  p.en-title Web / Frontend design
  section.home-about
    h3 這是一個混雜入多彩多姿屬性的奇特之地。
    p 顧名思義，此處放置著各種微妙的設計作品。<br>網站本身為SPA實驗作。故特意採用左右翻頁。<br>還請來客安心逛逛這彈丸之地。
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination : {
          el: '.swiper-pagination',
          clickable:true,
        },
        speed: 1500,
        autoplay: {
          stopOnLastSlide: false,
          delay: 5000,
        },
        effect : 'fade',
        fadeEffect:{
          crossFade: true,
        },
        
        
      }
    }
    
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.rightblock
  width: 100%
  margin: 0
  padding: 0

.home-about
  padding: 2em 4em
  text-align: center
  h3
    font-family: 'cwTeXMing'
    letter-spacing: 0.25em
  p
    font-weight: 400
    padding-top: 2em

.swiper-container
  max-width: calc(100vw - 200px)
  overflow: visible
@media screen and (max-width: 1050px)
  .swiper-container
    max-width: 100%
    padding-top: 46px

.swiper-slide img
  max-width: 100%
  width: 100%
.swiper-pagination
  bottom: -20px!important
.swiper-pagination-bullet
  background: #9b7a66
  margin: 10px
.swiper-pagination-bullet-active
  background: #6d5a50
</style>
