<template>
  <!-- <a-layout id="components-layout-demo-top-side-2" class="theme">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout> -->
  <div id="hedder" class="header"></div>
</template>

<script>
export default {
  name: "LayoutHeader",
  components: {},
};
</script>

<style>
.header {
  /* padding: 0 0 0 0; */
  height: 50px;
  background-color: rgb(43, 110, 233);
}
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2); */
  /* margin: 16px 28px 16px 0; */
  float: left;
  /* background-color: rgba(255, 255, 255, 0.2); */
}
</style>
