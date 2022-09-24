<template>
  <input 
    :modelValue="modelValue"
    @input="updateInput"
  />
</template>

<script>
  export default {
    name: "CustomInput",
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    border: 2px solid teal;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>