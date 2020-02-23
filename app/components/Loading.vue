
<template>
  <div 
    v-if="loading" 
    class="loading-page white d-flex align-center justify-center">
    <v-progress-circular
      :width="4"
      :size="40"
      color="softBlue"
      style="margin-bottom: 24px;"
      indeterminate />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),

  methods: {
    start () {
      this.loading = true
    },

    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-page {
  position fixed
  top 0
  left 0
  width 100%
  height 100vh
  z-index 1001
}
</style>