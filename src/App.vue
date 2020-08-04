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
            <!-- <el-menu-item index="/gank/Android">
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
            </el-menu-item> -->

            <el-menu-item v-for="(item) in data" :index="'/gank/'+item.type" :key="item.title">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>

            <el-menu-item v-if="loaded" index="/image">
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
  data() {
    return {
      data: [],
      loaded: false
    };
  },
  created() {
    console.log("App created");
    this.getType();
  },
  methods: {
    handleOpen(index, indexPath) {
      console.log("handleOpen");
    },
    getType() {
      this.$http.get("https://gank.io/api/v2/categories/GanHuo").then(
        function(res) {
          console.log("获取分类");
          console.log(res.data.data);
          this.data = this.data.concat(res.data.data);
          this.loaded = true;
        },
        function(res) {
        }
      )
      .catch(function(res) {
        
      });
    }
  }
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
