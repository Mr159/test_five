<template>
  <div id="app" class="container">

    <div class="header-container">
      头部导航
    </div>
    <div class="view-container">
      <div class="content">
        <router-view></router-view>
      </div>
      
    </div>
    <div class="footer-container">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/index"
  export default {
    name: 'App',
    components:{Tabbar}
  }
</script>

<style>
*{
    margin:0;
    padding:0;
}
html,body,#app{
    /* 必须设置，否则内容滚动效果无法实现 */
    width:100%;
    height:100%;
}
  .container{
    position: relative;
    width:100%;
    height:100%;
    max-width:640px;
    min-width:320px;
    overflow:hidden;  
  }
  .header-container{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    z-index:999;
    height:64px;
    background:pink; 
  }
  .view-container{
    padding-top: 64px;
    height:100%;
    padding-bottom:50px;
    background:lightblue;
    overflow:auto;
  }
  .content{
    height:100%;
  }
  .footer-container{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    max-width:640px;
    box-shadow:0 0 10px 0 hsla(0,6%,58%,0.6);
    height:50px;
    z-index:999;
    background:lightgreen;
  }
</style>