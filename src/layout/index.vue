<script setup></script>

<template>
  <div id="layout">
    <div class="top">top</div>
    <div class="content">
       <div class="layout-nav">nav</div>
       <div class="layout-view">view</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#layout {
  height: 100vh;
  .top {
    height: 60px;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 60px);
    display: flex;
    background-color: red;
    .layout-nav {
      width: 200px;
      background-color: pink;
    }
    .layout-view {
      flex: 1;
      background-color: skyblue;
    }
  }
}
</style>