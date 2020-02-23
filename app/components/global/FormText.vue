<template>
  <v-text-field
    v-model="text"
    :placeholder="placeholder"
    :readonly="readonly"
    :color="color"
    :prepend-inner-icon="prependIcon"
    :rules="[isRequired, isEmail]"
    :type="inputType"
    :validate-on-blur="validateOnBlur"
    class="form__text"
    autocomplete="new-password"
    data-lpignore="true"
    @keypress="(tel || number) ? isNumber($event) : null"
    @input="$emit('input', text)" />
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: true,
    },

    prependIcon: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: null
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    number: {
      type: Boolean,
      default: false,
    },

    tel: {
      type: Boolean,
      default: false,
    },

    date: {
      type: String,
      default: null
    },

    time: {
      type: Boolean,
      default: false,
    },

    timeData: {
      type: String,
      default: null,
    },

    email: {
      type: Boolean,
      default: false,
    },

    validateOnBlur: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: '#3f549c'
    },

    value: {
      type: String || Number,
      default: null
    },
  },

  data: () => ({
    text: ''
  }),

  computed: {
    isRequired() {
      return (this.required) ? r => !!r || 'Required.' : true
    },

    isEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return (this.email) ? r => pattern.test(r) || 'Invalid email format.' : true
    },

    inputType() {
      if (this.number) {
        return 'number'
      }

      else if (this.email) {
        return 'email'
      }

      else if (this.tel) {
        return 'tel'
      }

      else { return 'text' }
    },

    dateData() {
      return this.date
    }
  },

  mounted() {
    this.$nuxt.$on('form-area-reset', () => {
      if (this.timeData !== null) {
        this.text = this.timeData
      }

      if (this.date) {
        this.text = this.dateData
      }
    })
  },

  created() {
    if (this.value) {
      this.text = this.value
    }

    this.$nuxt.$on('clear-text', () => {
      this.text = ''
    })
  },

  methods: {
    isNumber(evt) {
      evt = (evt) || window.event

      const charCode = (evt.which) ? evt.which : evt.keyCode

      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        return evt.preventDefault()
      }

      return evt
    },
  }
};
</script>

<style lang="stylus" scoped>
.v-input.form__text
  padding 0
  margin 0

  >>> .v-input__slot
    // height 44px
    min-height auto
    margin-bottom 4px

    &::before
      border-color #3f549c

    // @media (max-width 600px)
    //   height 34px

    // .v-text-field__slot
    //   height 44px
    //   align-items flex-end

    //   @media (max-width 600px)
    //     height 34px

    input
      font-family DINPro
      font-size 22px
      font-weight 300
      font-stretch normal
      font-style normal
      line-height normal
      letter-spacing 0.46px
      color #3f549c
      padding 0
      padding-bottom 12px

      @media (max-width 600px)
        // font-size 18px
        // line-height 28px
        padding-bottom 8px

    ::placeholder
      font-family DINPro
      font-size 22px
      font-weight 300
      font-stretch normal
      font-style normal
      line-height normal
      letter-spacing 0.46px
      color #3d3d3f
      padding-left 1px

  &.error--text >>> .v-input__slot
    // border-style inset
    border 0
    border-bottom 1px solid #ff9600 !important

  >>> .v-text-field__details
    margin-bottom 12px

    .v-messages__message
      line-height 16px
      padding-left 1.6px

  &.error--text >>> .v-input__slot
    // border-style inset
    border 0
    border-bottom 1px solid #ff9600 !important

  // input details
  >>> ::-webkit-datetime-edit-ampm-field
   display none !important

  >>> input[type=time]
    &::-webkit-clear-button
      // display none
      appearance none
      margin 0

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button
      appearance none
      opacity 0
      padding 10
</style>
