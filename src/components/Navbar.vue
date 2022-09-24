<template>
  <div class="navbar">
    <div class="">vue 3</div>
    <div class="navbar__btns">
      <CustomButton
        @click="$router.push('/about')"
      >
        About
      </CustomButton>
      <CustomButton
        @click="$router.push('/posts')"
      >
        Posts
      </CustomButton>
      <CustomButton
        @click="$router.push('/posts-store')"
      >
        Posts Store
      </CustomButton>
      <CustomButton
        @click="$router.push('/posts-composition')"
      >
        Posts Compose
      </CustomButton>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: aqua;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
</style>