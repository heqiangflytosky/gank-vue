<template>
  <div id="app">
    <el-row :gutter="10">
      <el-col :span="2" style="width:10%;">
        <div>
          <el-menu
            class="el-menu-vertical-demo"
            theme="dark"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="$route.path"
            @select="handleOpen"
            router
          >
            <el-menu-item index="/gank/Android">
              <i class="el-icon-menu"></i>
              <span slot="title">Android</span>
            </el-menu-item>
            <el-menu-item index="/gank/iOS">
              <i class="el-icon-menu"></i>
              <span slot="title">iOS</span>
            </el-menu-item>
            <el-menu-item index="/gank/休息视频">
              <i class="el-icon-menu"></i>
              <span slot="title">休息视频</span>
            </el-menu-item>
            <el-menu-item index="/gank/前端">
              <i class="el-icon-menu"></i>
              <span slot="title">前端</span>
            </el-menu-item>
            <el-menu-item index="/gank/App">
              <i class="el-icon-menu"></i>
              <span slot="title">App</span>
            </el-menu-item>
            <el-menu-item index="/gank/拓展资源">
              <i class="el-icon-menu"></i>
              <span slot="title">拓展资源</span>
            </el-menu-item>
            <el-menu-item index="/gank/瞎推荐">
              <i class="el-icon-menu"></i>
              <span slot="title">瞎推荐</span>
            </el-menu-item>
            <el-menu-item index="/image">
              <i class="el-icon-menu"></i>
              <span slot="title">妹纸</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="22" style="width:90%;">
        <div class="gank">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleOpen(index, indexPath) {
      console.log("rrr");
    }
  }
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
