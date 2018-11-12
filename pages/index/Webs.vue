<template lang="pug">
.outer-box
    h1.section-title 網頁作品
    p.en-title Web Works
    .full-row._between
        figure.full-col2.newsbox(v-for="web in webList")
            a.weblink(:href="web.link",target="_blank")
                h3.webtitle {{ web.title }}
                p.webtext Work: {{ web.description}}
                img.topic(:src="require(`~/assets/${web.img}`)")
    hr
</template>
<script>
export default {
    data() {
        return {
            webList: 
            [
                {
                    link: "https://chengyi-lin.pw/",
                    title: 'Cheng-Yi Lin Calligraphy',
                    description: 'HTML/CSS/SPA',
                    img: 'web-list/w-00.png',
                },
                {
                    link: "https://eng.coa.gov.tw/",
                    title: 'COA eng website',
                    description: 'HTML/CSS/UI',
                    img: 'web-list/w-01.png',
                },
                {
                    link: "https://academy.coa.gov.tw/YF/",
                    title: '青年農民輔導平台',
                    description: 'HTML/CSS/UI/Index-svg',
                    img: 'web-list/w-02.png',
                },
                {
                    link: "https://kids.coa.gov.tw/food_agri/",
                    title: '食農教育教學資源平台',
                    description: 'HTML/CSS/UI',
                    img: 'web-list/w-03.png',
                },
                {
                    link: "https://tapinfo.coa.gov.tw/tap_bonus/index.php",
                    title: '產銷履歷加菜金',
                    description: 'HTML/CSS/UI/JS',
                    img: 'web-list/w-04.png',
                },
                {
                    link: "https://4b1q.coa.gov.tw/qa_list.php",
                    title: '四章一Ｑ政策解疑專區',
                    description: 'HTML/CSS/UI',
                    img: 'web-list/w-05.png',
                },
            ]
        }
    }
}
</script>

<style lang="sass">
.newsbox
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
    border: 1px solid #eee
    height: 250px
    overflow: hidden
    transition: 0.5s
    background-color: #fff
    box-shadow: 3px 2px 20px rgba(black,0.1)
    .weblink
        display: contents
        text-decoration: none
    .webtitle,.webtext
        z-index: 2
        font-size: 1.25rem
        color: #fff
        opacity: 0
        transition: 1s
    .webtext
        font-size: 0.875rem
    .topic
        position: absolute
        top: 0
        z-index: 0
        height: 100%
        width: auto
        transition: 0.5s
    &:hover
        background-color: rgba(black,0.6)
        .webtitle,.webtext
            opacity: 1
        .topic
            z-index: -1
            transform: scale(1.1)

</style>