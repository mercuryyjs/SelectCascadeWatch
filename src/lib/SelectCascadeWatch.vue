<template> </template>
<script>
export default {
  name: 'SelectCascadeWatch',
  props: {
    firstModel: {
      type: [String, Number],
      required: true,
    },
    secondModel: {
      type: [String, Number],
      required: true,
    },
    thirdModel: {
      type: [String, Number],
      required: true,
    },
  },
  watch: {
    firstModel(newValue) {
      this.$emit('update:secondModel', '')
      this.$emit('update:thirdModel', '')
      this.$emit('updateSecondOptions', newValue)
    },
    secondModel(newValue) {
      if (typeof this.thirdModel !== 'undefined') {
        this.$emit('update:thirdModel', '')
        this.$emit('updateThirdOptions', newValue)
      }
    },
  },
}
</script>
