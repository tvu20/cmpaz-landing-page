<template>
  <v-btn
    :ripple="false"
    tile
    outlined
    color="#3f549c"
    :style="{ height: '40px' }"
    class="font--btn"
    :class="[hover ? 'btn--hover' : '',
             bigFont ? 'big-font' : '']">
    {{ text }}
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    hover: {
      type: Boolean,
      default: false
    },

    bigFont: {
      type: Boolean,
      default: false
    },

    smallFont: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.font--btn >>> 
  .v-btn__content
    font-family HelveticaNeue
    font-size 14px
    font-weight normal
    font-stretch normal
    font-style normal
    line-height 1.1
    letter-spacing normal
    text-align center
    color #3f549c
    text-transform none
    white-space initial
    width 100%

    span 
      font-family HelveticaNeue
      font-size 13px
      font-weight normal
      font-stretch normal
      font-style italic
      line-height 1.25
      letter-spacing normal
      text-align center
      color #3f549c
      display block

.btn--hover.font--btn&:hover >>>
  background #3f549c !important
    
  .v-btn__content
    color white !important

    span
      color white !important

.font--btn.big-font >>> 
  .v-btn__content
    font-size 20px
</style>
