<template>
  <div>
    <el-table :data="list" height="400" style="width: 100%">
       <el-table-column type="index" label="#" width="180"></el-table-column>
      <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
      <el-table-column prop="username" label="用户姓名" width="180"></el-table-column>
      <el-table-column prop="city" label="注册地址"></el-table-column>
    </el-table>
      
  </div>
</template>

<script>
import abayApi from "../api/abay";
export default {
  name: "",
  data() {
    return {
      list:[],
      

    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.giao();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods:{
      giao(){
        abayApi.getMemberList().then((res)=>{
          console.log(res);
          this.list=res.data;
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    },
     
    
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>