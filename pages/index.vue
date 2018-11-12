<template lang="pug">
#app
  headroom
    header.header
      h1.logo-mb-space
        nuxt-link.logo-mb(to="/Home")
    Slide(right noOverlay width="200")
      nuxt-link(to="/Home")
        span Home
      nuxt-link(to="/Intro")
        span About me
      nuxt-link(to="/Webs")
        span Web works
      //- nuxt-link(to="/Other")
      //-   span Other works
      nuxt-link(to="/Contact")
        span Contact
  .leftnav
    .web-logo
      nuxt-link.logo(to="/Home")
    ul.linklist
      li.link-item
        nuxt-link(to="/Intro") About me
      li.link-item
        nuxt-link(to="/Webs") Web works
      //- li.link-item
      //-   nuxt-link(to="Other") Other works
      li.link-item
        nuxt-link(to="/Contact") Contact
    p.copyright (C)Loxi All rights Reserved.
  .mainblock
  transition(name="fade" mode="out-in")
    nuxt-child(:key="$route.params.id")

</template>

<script>
import { headroom } from 'vue-headroom'
import{ Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    headroom, Slide
  },
}
</script>

<style lang="sass">
$mainColor: #183944
$lightBrown: #b2a197

// Header
.header
  opacity: 0
  line-height: 60px
  padding-left: 200px
  background-color: rgba(255, 255, 255, 0.94)
  text-align: right
  .logo-mb-space
    opacity: 0
    width: 240px
    margin: 0 auto
    .logo-mb
      display: block
      height: 46px
      background-image: url(~static/home-img/loxi-logo-mb.png)
      background-size: contain
      text-align: left
@media screen and (max-width: 1050px)
  .header
    opacity: 1
    padding-left: 0
    height: 46px
    .logo-mb-space
      opacity: 1
@media screen and (max-width: 500px)
  .header
    .logo-mb-space
        margin: 0 auto 0 5px

// Mobile-nav
.bm-burger-button
  position: fixed
  width: 24px
  height: 18px
  left: 20px
  top: 16px
  cursor: pointer
@media screen and (min-width: 1050px)
  .bm-burger-button
    display: none

.bm-burger-bars
  background-color: $mainColor

.line-style
  position: absolute
  height: 10%
  left: 0
  right: 0

.cross-style
  position: absolute
  top: 24px
  right: 40px
  cursor: pointer

.bm-cross
  background: $mainColor

.bm-cross-button
  height: 30px
  width: 30px

.bm-menu
  height: 100vh /* 100% Full-height */
  width: 0 /* 0 width - change this with JavaScript */
  position: fixed /* Stay in place */
  z-index: 1000 /* Stay on top */
  top: 0
  left: 0
  background-color: transparent
  background-image: url(~static/paper_bg.png)
  background-size: 200% 100%
  background-position: left -15px
  background-repeat: no-repeat
  overflow-x: hidden /* Disable horizontal scroll */
  padding-top: 40px /* Place content 60px from the top */
  transition: 0.5s /*0.5 second transition effect to slide in the sidenav*/

.bm-overlay
  background: rgba(0, 0, 0, 0.3)

.bm-item-list
  color: $mainColor
  margin-left: 25%
  font-size: 1rem

.bm-item-list > *
  display: flex
  text-decoration: none
  min-width: 120px
  padding: 1em 0 0.25em 0
  color: $mainColor
  transition: .5s
  &:hover
    transform: translate(10px,-2px)
    border-bottom: 2px dotted $mainColor
    & > span:after
      transition: .5s
      opacity: 1

.bm-item-list > * > span
  margin-left: 10px
  font-weight: 500
  color: $mainColor
  &:after
    content: "➤"
    padding-left: 0.5em
    opacity: 0
    
// -----------------
// Navbar
.leftnav
  z-index: 99
  position: fixed
  height: 100vh
  padding: 0px
  width: 200px
  flex: 0 0 120px
  background: $mainColor
  border-right: 1px solid #eee
  align-content: center
@media screen and (max-width: 1050px)
  .leftnav
    width: 100%
    height: 0
    min-height: 0
    opacity: 0
    overflow: hidden
    pointer-events: none


// Index logo
.web-logo
  position: relative
  top: 30px
  display: block
  height: 300px
  padding-top: 40px
  .logo
    display: block
    height: 150px
    width: 100%
    opacity: 0.7
    background-image: url(~static/home-img/loxi-logo.png)
    background-size: 70px
    background-repeat: no-repeat
    background-position: center bottom

// Route
.linklist
  position: absolute
  top: 280px
  left: 0
  width: 100%
  list-style: none
  padding-left: 0
  .link-item
    position: relative
    margin-top: -1px
    background-color: transparent
    transition: .5s
    &:hover
      background-color: $lightBrown
      a
        color: $mainColor
    &:before
      content: ""
      position: absolute
      top: 0
      left: 50%
      width: 150px
      transform: translateX(-50%)
      height: 1px
      color: $mainColor
      background-color: $lightBrown
    a
      display: block
      padding: 10px
      color: $lightBrown
      font-size: 0.875em
      text-decoration: none
      align-items: center
    
.copyright
  position: absolute
  bottom: 15px
  left: 0
  right: 0
  font-size: 0.3em
  text-align: center
  color: $lightBrown

</style>
