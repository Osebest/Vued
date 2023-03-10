import { defineStore } from "pinia";
import axiosClient from "@/axiosClient";

export const useGithubStore = defineStore("github", {
  state: () => ({
    osebest: null,
    user: null,
    repos: [],
    length: 0,
    pageNumber: 1,
    postPerPage: 5,
    repo: {},
    error: false,
  }),
  actions: {
    async getProfile(username) {
      axiosClient
        .get(username)
        .then(({ data }) => {
          this.osebest = data;
        })
    },
    async getUser(username) {
      this.error = false;
      this.user = null;
      axiosClient
        .get(username)
        .then(({ data }) => {
          this.user = data;
        })
        .catch(() => {
          this.error = true;
        });
    },
    async getRepos(username) {
      if (!username) return;
      axiosClient
        .get(`${username}/repos`)
        .then(({ data }) => {
          this.repos = data;
        })
        .then(() => {
          this.length = Math.ceil(this.repos.length / this.postPerPage);
        });
    },
    setPageNumber(pageNumber) {
      this.pageNumber = pageNumber;
    },
    setSingleRepo(id) {
      this.repo = this.repos.find((repo) => repo.id == id);
    },
  },
  getters: {
    filterRepos() {
      const indexOfLastPost = this.pageNumber * this.postPerPage;
      const indexOfFirstPost = indexOfLastPost - this.postPerPage;
      return this.repos.slice(indexOfFirstPost, indexOfLastPost);
    },
  },
});
