<template>
  <v-btn
    :ripple="false"
    depressed
    tile
    color="#3f549c"
    :style="{height: '40px',
             fontSize: '24px' }"
    class="font--btn">
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-btn
  border-radius 0 !important

.font--btn >>> .v-btn__content
  font-family HelveticaNeue
  font-size 14px
  font-weight normal
  font-stretch normal
  font-style normal
  line-height normal
  letter-spacing normal
  text-align center
  color #fff
  text-transform none
</style>
