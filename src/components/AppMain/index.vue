<template>
  <div class="main">
        <app-link v-show="$route.path !=='/home'"></app-link>
        <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./link"
export default {
name:"",
data() {
return {

}
},
components:{
    AppLink
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
.main{
    padding:10px;
    
}
</style>