import axios from "axios";

export const state = () => ({
  all: [],
  comments: [],
  filteredComments: [],
  inputFilterValue: "",
  selectedValue: "",
});

export const mutations = {
  SET_POSTS(state, posts) {
    state.all = posts;
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments;
    state.filteredComments = comments;
  },
  SET_INPUT_FILTER_Value(state, value) {
    state.inputFilterValue = value;
    state.filteredComments = state.comments;
  },
  SET_SELECTED_FILTER_Value(state, selectedValue) {
    state.selectedValue = selectedValue;
    state.filteredComments = state.comments;
    selectedValue === "email"
      ? (state.filteredComments = state.comments.filter(function (value) {
          return value.email.includes(state.inputFilterValue);
        }))
      : (state.filteredComments = state.comments.filter(function (value) {
          return value.name.includes(state.inputFilterValue);
        }));
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        commit("SET_POSTS", res.data);
      })
  },
  async fetchComments({ commit }, postId) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        commit("SET_COMMENTS", res.data);
      })
  },
};
