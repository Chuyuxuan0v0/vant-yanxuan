<template>
  <div id="app">
    <!-- <van-row>
      <van-col span="5"><div class="logo"></div></van-col>
      <van-col span="13"
        ><div class="inputs">
          <div class="ico"></div>
          <div class="input"></div></div
      ></van-col>
      <van-col span="3">span: 6</van-col>
    </van-row> -->
    <div class="line">
      <div class="logo"></div>
      <div class="inputs">
        <span class="placehoder">搜索商品, 共30000+款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <router-view />
  </div>
</template>


<style  scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
  margin: 5px;
}
/* ==================line start==================  */
.line {
  /* 弹性布局 */
  display: flex;
  /* 主轴水平 */
  flex-direction: row;
  /* 主轴两端对齐 */
  justify-content: space-between;
  height: 50px;
  width: 100%;
}
.logo {
  margin: 15px 0px 15px 0;
  width: 21%;
  background: url("./assets/tietu.png") -65px -134px;
  background-size: 200px;
  /* background-color: red; */
}
.inputs {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 10px 0;
  width: 60%;
  background-color: #ededed;
  border-radius: 5px;
}
.login {
  width: 12%;
  margin: 13px 5px 13px 5px;
  border-radius: 5px;
  font-size: 14px;
  border: #60090c solid 1px;
  color: #60090c;
}
.placehoder {
  /* 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 */
  flex-grow: 1;
  color: #666;
  font-size: 14px;
}
/* ==================header end==================  */
</style>









