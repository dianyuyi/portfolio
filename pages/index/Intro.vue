<template lang="pug">
.outer-box#aboutMe
    h1.section-title 關於我
    p.en-title About Me
    br
    .full-row._between
        .about
            h2 羅瑋婷 / Loxi
            h3 Designer / frontend engineer
            p.introtext 經歷編輯、平面設計、網頁設計，現正朝網頁前端工程師的道路奔馳。靠著各種網路資源自學來適應不斷推陳出新的前端領域，學習動力來自不服輸的性格。目前鑽研Vue.js及Nuxt.js中。
            p.introtext dianyuyi@gmail / 0972123672
            a(href="https://codepen.io/loxi/",target="_blank")
                i.fab.fa-codepen
            a(href="https://github.com/dianyuyi",target="_blank")
                i.fab.fa-github
            //- font-awesome-icon(:icon="['fab', 'codepen']")
            //- font-awesome-icon(:icon="['fab', 'github']")
    hr
    h2.about-title Skills
    .full-row._between
        .skill.full-col3
            h4 Graphic
            .circle.p90
                .space
                    p PS
            .circle.p90
                .space
                    p AI
        .skill.full-col3
            h4 Web
            .circle
                .space
                    p Pug
            .circle
                .space
                    p Sass
        .skill.full-col3
            h4 Programming
            .circle.p50
                .space
                    p JS
            .circle.p30
                .space
                    p Vue
    hr
    h2.about-title Dev / Tools / Languages
    .full-row._between
        .about.full-col3
            .square
                p Mac OS
                p npm
                p webpack
        .about.full-col3
            .square
                p Git / Sourcetree
                p VScode
                p ES6 (basic)
        .about.full-col3
            .square.last
                p Chinese - Native
                p Japanese - JLPT N2
                p English - Normal
    hr
    h2.about-title Education
    .full-row._between
        .resumeBlock
            ul
                li 國立中正大學 / 中文系學士
                    p National Chung Cheng University / Dept. of Chinese B.A. 
    hr
    h2.about-title Experience
    .full-row._between
        .resumeBlock
            ul.rireki
                li.outer-level(v-for="rireki in rirekiList")
                    h4 {{ rireki.companyNameCh }} / {{ rireki.companyNameEng }} 
                    p {{ rireki.jobTitle }}  {{ rireki.workDate }}
                    ul
                        li(v-for="item in rireki.workList") {{ item.list }}
    hr
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'aboutMe',
    data() {
        return {
            rirekiList: [
                {
                    companyNameCh: '冠諭科技股份有限公司',
                    companyNameEng: 'Guanyu Co., Ltd.',
                    jobTitle: '網頁設計師',
                    workDate: '2017.4 ~ 2018.6',
                    workList: [
                                {list: '將舊版公家機關網站重新切版，轉為RWD頁面，並在兼顧無障礙規定的情況下盡可能美化版面。'},
                                {list: '獨立進行活動網站的架構設計、UI、切版及前端簡易套件。'},
                                {list: '針對需要支援舊版本IE的網頁，不使用JS的情況下利用純CSS完成頁面美化。'},
                                {list: '製作農業新聞電子報，將原本純圖片連結的EDM改為單頁HTML版面，並每月改版。'},
                                {list: '設計製作公家機關記者發表會使用的大型背板、立牌、邀請函及DM。'},
                                ]
                },
                {
                    companyNameCh: '自由工作者',
                    companyNameEng: 'Freelance',
                    jobTitle: 'Freelance',
                    workDate: '2016.9 ~ 2017.9',
                    workList: [
                                {list: '書封、DM、包裝、UI設計。'},
                                ]
                },
                {
                    companyNameCh: '祥暐印刷',
                    companyNameEng: 'Siangwei Printing Co.',
                    jobTitle: '美工人員',
                    workDate: '2015.4 ~ 2015.9',
                    workList: [
                                {list: '平面包裝排版設計。'},
                                ]
                },
                {
                    companyNameCh: '誰不顛音樂',
                    companyNameEng: 'Bonding Music',
                    jobTitle: '詞作者兼慈善志工',
                    workDate: '2014.8 ~ 2014.12',
                    workList: [
                                {list: '創作慈善用歌詞，約30首。'},
                                {list: '訪視關懷戶、遞送物資、參加義演等慈善志工活動。'},
                                ]
                },
                {
                    companyNameCh: '南一書局',
                    companyNameEng: 'Nan I Book Enterprise Co., Ltd.',
                    jobTitle: '編輯',
                    workDate: '2012.8 ~ 2013.10',
                    workList: [
                                {list: '國小國語科教科書輔材（參考書、試題本）的校對編輯及出題。'},
                                ]
                },
            ]
        }
    }
}
</script>

<style lang="sass">
$mainColor: #183944
$lightBlue: #f4f4f4

.about-title
    position: relative
    padding-bottom: 10px
    &:after
        content: ''
        position: absolute
        left: 50%
        bottom: 0px
        transform: translateX(-50%)
        // height: 1px
        width: 30%
        // background-color: #fca
        // border-bottom: 1px dashed #fca

.about
    text-align: left
    a
        color: $mainColor
        transition: 0.2s
        &:hover
            opacity: 0.7
        i.fab
            font-size: 1.25rem
            padding: 10px 8px
.introtext
    padding-top: 15px
.square
    padding-left: 15px
    border-left: 2px solid $mainColor
    p
        padding-bottom: 2px 0px

@media screen and (max-width: 500px)
    .square
        padding-bottom: 5px
        border-left: none
        border-bottom: 1px solid #ddd
        &.last
            border-bottom: none
        p
            text-align: center
            padding-bottom: 3px

.skill
    h4
        margin-bottom: 15px
        color: #fff
        background: $mainColor
        border-right: 5px solid $lightBlue
        border-left: 5px solid $lightBlue
    .circle
        position: relative
        display: inline-block
        width: 80px
        height: 80px
        border-radius: 50%
        background-color: #ffd263
        overflow: hidden
        margin: 0 10px
        z-index: 0
        &:before,&:after
            content: ''
            position: absolute
            top: 0
            transform-origin: 40px 40px
            width: 80px
            height: 40px
            background-color: #ccc
        &:before
            left: 0
            transform: rotate(-90deg)
        &:after
            right: 0
            transform: rotate(180deg)
            background-color: #ffd263
        &.p50
            background-color: #54af86
            &:after
                transform: rotate(130deg)
                background-color: #54af86
        &.p30
            background-color: #ccc
            &:after
                transform: rotate(70deg)
                background-color: #54af86
                z-index: -1        
        &.p90
            background-color: #ffab82
            &:after
                transform: rotate(240deg)
                background-color: #ffab82

        .space
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%,-50%)
            border-radius: 50%
            width: 60px
            height: 60px
            background-color: #f4f4f4
            z-index: 2
            p
                position: relative
                top: 30%
                font-size: 16px
                font-weight: 700
                text-align: center

.resumeBlock
    text-align: left
    ul
        list-style: none
        li
            position: relative
            padding-left: 30px
            &:before,&:after
                content: ''
                position: absolute
                left: 15px

            &:before
                background-color: #ddd
                width: 1px
                top: 2px
                height: 10px
            &:after
                top: 5px
                left: 13px
                width: 5px
                height: 5px
                // border-radius: 50%
                transform: rotate(45deg)
                background-color: #ccc

ul.rireki
    padding-bottom: 0px
    border-left: 3px solid #ddd
    .outer-level
        padding-bottom: 20px
        li
            margin-top: 2px
            letter-spacing: 1px
            font-size: 0.8rem
</style>
