<template>
  <div>
    <h1>Posts page</h1>
    <CustomButton
      @click="showPopup"
      style="margin: 10px 0"   
    >
      Create post
    </CustomButton>
    <Popup 
      v-model:show="isPopupVisible"
    >
      <PostForm 
        @create="createPost"
      />
    </Popup>
    <PostList 
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import Popup from "@/components/ui/popup.vue"

export default {
  components: {
    PostList,
    PostForm,
    Popup
},
  data() {
    return {
      posts: [
        { id: 1, title: 'JS', body: 'Description 1'},
        { id: 2, title: 'JS 2', body: 'Description 2'},
        { id: 3, title: 'JS 3', body: 'Description 3'},
      ],
      isPopupVisible: false,
      fetchedPosts: undefined,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.isPopupVisible = false
    },
    removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId)
    },
    showPopup() {
      this.isPopupVisible = true
    },
    async fetchPosts() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
        const posts = await fetch(url).then(res => res.json())

        this.posts = posts
        return posts
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}

</script>

<style>

</style>