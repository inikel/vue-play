import { ref, onMounted } from "vue"

export function usePosts() {
  const posts = ref([])

  const fetching = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
      const _posts = await fetch(url).then(res => res.json())
  
      posts.value = _posts
      return posts
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(fetching)

  return {
    posts
  }
}