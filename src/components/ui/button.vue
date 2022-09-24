<template>
  <button>
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'CustomButton'
  }
</script>

<style scoped>
  button {
    margin-bottom: 15px;
    padding: 5px 10px;
    border: 1px solid teal;
    color: teal;
    background-color: aliceblue;
    cursor: pointer;
  }
</style>