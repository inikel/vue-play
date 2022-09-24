<template>
  <div v-show="posts.length > 0">
    <h3 style="margin-bottom: 15px;">Users list</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post.id)"
    />
  </div>
  <div v-show="!posts.length">
    No users at the moment
  </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  props: {
      posts: {
          type: Array,
          required: true,
      },
  },
  components: { PostItem }
}
</script>

<style scoped>

</style>