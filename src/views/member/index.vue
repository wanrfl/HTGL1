<template>
  <div class="member">
    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名" ></el-table-column>
      <el-table-column prop="birthday" label="会员生日" width="110"></el-table-column>
      <el-table-column prop="phone" label="手机号码" ></el-table-column>
      <el-table-column prop="integray" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额" ></el-table-column>
      <el-table-column prop="payType" label="支付类型" ></el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column  label="操作" width="150">
      <template slot-scope="scope">
      <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="handleDele(scope.$index,scope.row)">删除</el-button>
    </template>
    </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    
  </div>
</template>

<script>
import MemberApi from "../../api/member";
export default {
  name: "",
  data() {
    return {
      list: [],
      currentPage : 1,
      pageSize : 10,
      total : 0
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.fetchData();
  },
  methods: {
    handleEdit() {
      // console.log(data);
    },
    handleDele() {},

    fetchData() {
      MemberApi.getMemberList()
        .then((res) => {
          console.log(res);
          this.list = res.data.data.data;
          // console.log(this.lsit);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleSizeChange(cSize){
      console.log("条数")
      this.pageSize = cSize;
      this.fetchData();
    },
    //页码改变时触发
    handleCurrentChange(cPage){
      console.log(cPage)
      this.currentPage = cPage;
      this.fetchData();
    },
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.member{
  margin-top: 20px;
}
</style>