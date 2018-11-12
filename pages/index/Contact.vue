<template lang="pug">
.outer-box
    h1.section-title 聯絡我
    p.en-title Contact
    .full-row.txtbox
        ul
            li 
                h3
                    i.fas.fa-map-marker-alt
                p Taipei City, Taiwan
            li 
                h3
                    i.fas.fa-envelope-open
                p dianyuyi@gmail
            li 
                h3
                    i.fas.fa-mobile-alt
                p 0972123672
            //- li 
            //-     h3 Github
            //-     a(href="https://github.com/dianyuyi",target="_blank")
            //-         p https://github.com/dianyuyi
</template>



<style lang="sass">
$mainColor: #183944

.linkbox
    height: 120px
    img
        position: relative
        max-width: 100%
        top: -50%

.txtbox
    align-content: center
    justify-content: center
    ul
        list-style: none
        li
            display: flex
            padding: 10px
            text-align: left
            h3
                margin: 0
                padding: 0 10px
                width: 40px
                i
                    font-size: 0.875rem
            p
                flex: 2
                font-size: 1rem
                letter-spacing: 2px
                padding: 2px 10px
                color: $mainColor
                border-bottom: 2px solid #eee
                border-left: 1px solid #eee
            a
                flex: 2
                text-decoration: none

</style>