export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hidePopup() {
      this.$emit('update:show', false)
    }
  },
  mounted() {
    console.log('popup mounted')
  }
}