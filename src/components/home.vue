<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item :index="'/'+calender">
            <i class="el-icon-menu"></i>
            布丁的日程表</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
<!--       路由填充-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  created () {
  }
}
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    background: url("../assets/img/f5q9.jpg") no-repeat fixed;
  }
  .el-container{
    height: 100%;
  }
  .el-aside {
    display: block;
    height: 100%;
    background: rgba(0,0,0,0.5);
    .el-menu{
      border-right: none;
    }
  }
</style>
