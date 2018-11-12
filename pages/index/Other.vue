<template lang="pug">
.outer-box
    h1.section-title 其他作品
    p.en-title Other works
    .full-row._around
        gallery(:images="workslist" :index="index" @close="index = null")
        .image(v-for="(image, imageIndex) in workslist" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + require(`@/assets/${image.href}`) + ')' }")
</template>


<script>
import VueGallery from 'vue-gallery'
export default {
    data(){
        return {
            workslist: [
            {
                title: '詭影',
                description: '書封設計',
                href: 'otherworks/g-01.jpg'
            },
            {
                title: '薄雨',
                description: '書封設計',
                href: 'otherworks/g-02.jpg'
            },
            {
                title: '書法案上有隻喵',
                description: '書封設計',
                href: 'otherworks/g-03.png'
            },
            {
                title: '龍內的獅子',
                description: '書封設計',
                href: 'otherworks/g-04.jpg'
            },
            {
                title: '粗食潮流',
                description: '書封設計',
                href: 'otherworks/g-05.png'
            },
            {
                title: '業之扉',
                description: '書封設計',
                href: 'otherworks/g-06.png'
            },
            {
                title: '中秋EDM',
                description: 'EDM',
                href: 'otherworks/g-07.jpg'
            },
            {
                title: '農業課程EDM',
                description: 'EDM',
                href: 'otherworks/g-08.jpg'
            },
            {
                title: '企劃書封面',
                description: '書封設計',
                href: 'otherworks/g-09.jpg'
            },
            {
                title: '農業電子報',
                description: 'EDM',
                href: 'otherworks/g-10.jpg'
            },
            {
                title: '葫蘆巴-植物電繪',
                description: '插畫',
                href: 'otherworks/g-11.jpg'
            }
            ],
            index: null
        }
    },
    components:{
        'gallery': VueGallery
    }
}
</script>

<style lang="sass">
.image
    display: inline-flex
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    background-color: #ebebeb
    border: 1px solid #ebebeb
    margin: 5px
    width: 150px
    height: 150px

.blueimp-gallery > .description
    text-shadow: 0px 0px 2px #000
    font-weight: 700
    top: 40px!important
    opacity: 0.8

</style>