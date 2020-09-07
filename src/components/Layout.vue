<template>
  <div class="box">
     <AppHeader></AppHeader>
     <!-- 侧边栏 -->
    <AppNavBar></AppNavBar>
     <!-- 主体 -->
    <AppMain></AppMain>
  </div>
</template>

<script>
import AppHeader from "./AppHeader"
import AppNavBar from "./AppNavBar/index"
import AppMain from "./AppMain"

export default {
name:"",
data() {
return {

}
},
components:{
  AppHeader,
  AppNavBar,
  AppMain
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .header{
    height:50px;
    line-height:50px;
    position:absolute;
    right:0;
    left:0;
    background-color:#545c64;
  }
  .main{
    position:absolute;
    left:240px;
    right:0;
    top:50px;
    bottom:0;
  }
</style>