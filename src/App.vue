<template>
  <div id="app">
    <van-row type="flex" justify="space-between">
      <van-col span="7"><div class="logo"></div></van-col>
      <van-col span="7">span: 6</van-col>
      <van-col span="7">span: 6</van-col>
    </van-row>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  /* 图片垂直居中 */
  height: 40px;
  width: 150px;

  vertical-align: middle;
  background: url("./assets/tietu.png") -115px -250px;
  transform: scale(0.8);
  display: inline-block;
}
</style>
