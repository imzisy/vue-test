import axios from "axios"

export const state = () => ({
  all: [],
  comments: [],
  inputFilterValue: "",
  selectedValue: "",
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.all = posts
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  SET_INPUT_FILTER_Value(state, value) {
    state.inputFilterValue = value
  },
  SET_SELECTED_FILTER_Value(state, value) {
    state.selectedValue = value
    state.comments = []
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        commit("SET_POSTS", res.data)
      })
  },
  async fetchComments({ commit }, postId) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        commit("SET_COMMENTS", res.data)
      })
  },
}
