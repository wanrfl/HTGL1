<template>
  <div class="navBar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-s-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <!-- <el-col :span="12"> -->
      <!-- <h5>自定义颜色</h5> -->
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>员工管理</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="/ygyh">员工1号</el-menu-item>
            <el-menu-item index="1-2">员工2号</el-menu-item>
            <el-menu-item index="1-3">员工3号</el-menu-item>
            <el-menu-item index="1-4">员工4号</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">员工3号</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">员工4号</template>
          <el-menu-item index="1-4-1">员工5号</el-menu-item>-->
        </el-submenu>
        <!-- </el-submenu> -->
        <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
        </el-menu-item>-->
      </el-menu>
      <!-- </el-col> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style scoped>
el-menu-vertical-demo {
  border-right: 0;
}
.navBar {
  position: absolute;
  left: 0;
  top: 50px;
  width: 200px;
  /* height:280px; */
}
.el-menu {
  border-right: none;
}
</style>