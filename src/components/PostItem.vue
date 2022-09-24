<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </div>
    <div class="post__btns">
      <CustomButton
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </CustomButton>
      <CustomButton
        @click="$emit('remove', post)"
      >
        Удалить
      </CustomButton>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>