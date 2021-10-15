<template>
  <div>
    <layout-header />
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <Solution msg="Welcome to Your Vue.js App" />
      <!-- <SubSolution /> -->
    </div>
  </div>
</template>

<script>
import Solution from "./components/Solution.vue";
// import SubSolution from "./components/SubSolution.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import store from "./vuex/store";

export default {
  name: "App",
  components: {
    Solution,
    LayoutHeader,
  },
  store,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* padding: 20px; */
  height: auto;
  /* position: relative;
  display: block; */
}
</style>
