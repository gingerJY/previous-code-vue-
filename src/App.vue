<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app{
    font-family: 'microsoft yahei';
    font-size: 14px;
    color: #333;
}
a{
  text-decoration: none;
  color: #333;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    display: inline-block;
}
</style>
