<template>
  <form @submit.prevent>
    <CustomInput 
      v-focus
      v-model="post.title"
      class="input" 
      type="text" 
      placeholder="Title" 
    />
    <CustomInput 
      v-model="post.body"
      class="input" 
      type="text" 
      placeholder="Description"
    />
    <CustomButton @click="createPost">Создать</CustomButton>
  </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

</style>