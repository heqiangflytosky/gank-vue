<template>
  <div id="app">
    <el-row :gutter="10">
      <el-col :span="2" id="gank-menu">
        <div id="el-menu-vertical">
          <img id="gank-logo"
            src="https://ae01.alicdn.com/kf/U7e32bca8bf0f4b43a28ea2da54e9cedaZ.jpg"
            @click="toGank" />
          <el-menu
            theme="dark"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="$route.path"
            @select="handleOpen"
            router
          >
            <el-menu-item v-for="(item) in data" :index="'/gank/'+item.type" :key="item.title">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>

            <el-menu-item v-if="loaded" index="/image">
              <i class="el-icon-menu"></i>
              <span slot="title">美女</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="16" id="gank-content">
        <div class="gank">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <div></div>
  </div>
</template>

<script>
/* eslint-disable */
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
      // 滚动到页面最前端
      //document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getType() {
      this.$http
        .get("https://gank.io/api/v2/categories/GanHuo")
        .then(
          function(res) {
            console.log("获取分类");
            console.log(res.data.data);
            this.data = this.data.concat(res.data.data);
            this.loaded = true;
          },
          function(res) {}
        )
        .catch(function(res) {});
    },
    toGank() {
      window.open("https://gank.io/");
    }
  }
};
</script>

<style>
#app {
  margin-top: 10px;
}
#el-menu-vertical {
  position: fixed;
}
#gank-menu {
  margin-left: 1%;
}
#gank-content {
  margin-left: 20%;
}
#gank-logo {
  max-height: 50px; 
  margin-left:12px;
}
#gank-logo:hover {
  cursor: pointer;
}
</style>
