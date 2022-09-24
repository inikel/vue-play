<template>
  <div>
    <h1>Posts page</h1>

    <div>
      {{ likes }}
    </div>
    <CustomButton @click="addLike">
      Add
    </CustomButton>
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
import { mapState, mapActions } from "vuex"
import { ref } from "vue"
import { usePosts } from '@/hooks/usePosts'

export default {
  components: {
    PostList,
    PostForm,
    Popup
},
  data() {
    return {
      isPopupVisible: false,
    } 
  },
  // computed: {
  //   ...mapState({
  //     posts: state => state.postsModule.posts
  //   })
  // },  
  // methods: {
  //   ...mapActions({
  //     fetchPosts: 'postsModule/fetchPosts'
  //   }),
  //   createPost(post) {
  //     this.posts.push(post)
  //     this.isPopupVisible = false
  //   },
  //   removePost(postId) {
  //     this.posts = this.posts.filter(post => post.id !== postId)
  //   },
  //   showPopup() {
  //     this.isPopupVisible = true
  //   },
  // },
  setup(props) {
    const { posts } = usePosts()

    return {
      posts
    }
  }
}

</script>

<style>

</style>