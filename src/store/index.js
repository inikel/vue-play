import { createStore } from "vuex";
import { postsModule } from "./postModule";

export default createStore({
  modules: {
    postsModule
  }
})