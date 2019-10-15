<template>
  <div style="width:100%;text-align: center;">
    <div class="wall">
      <el-col :span="12">
        <el-card class="imgCard" shadow="hover" v-for="(item,index) in data" v-if="index % 2 == 0" @click.native="onItemClick(item)">
          <img class="imgItem" :src="item.url" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="imgCard" shadow="hover" v-for="(item,index) in data" v-if="index % 2 == 1" @click.native="onItemClick(item)">
          <img class="imgItem" :src="item.url" />
        </el-card>
      </el-col>
    </div>
    <div v-if="loaded" class="loadMore" @click="loadMore">查看更多</div>
    <div v-else>正在加载...</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      category: null,
      data: [],
      loaded: true,
      currentPage: 0,
    };
  },
  created() {
    this.category = this.$route.path;
    console.log(this.category);
    this.getGankList(this.currentPage+1);
  },
  watch: {
    $route(to, from) {
      // 路由变化
      this.data.length = 0;
      this.category = to.fullPath;
    }
  },
  methods: {
    getGankList(index) {
      this.$http
        .get('http://gank.io/api/data/福利/10/' + index)
        .then(function(res) {
          console.log(res.data.results);
          this.data = this.data.concat(res.data.results);
          console.debug(this.data);
          this.onLoaded(true);
        },
        function(res) {
          this.onLoaded(false);
        })
        .catch(function(res) {
          this.onLoaded(false);
        });
    },
    loadMore() {
      this.loaded = false;
      this.getGankList(this.currentPage + 1);
    },
    onLoaded(stats) {
      this.loaded = true;
      if (stats) {
        this.currentPage++;
      } else {
        this.currentPage++;
      }
    },
    onItemClick(item) {
      console.log(item.url);
      window.open(item.url);
    },
  }
};
</script>
<style>
.wall {
  width: 60%;
  display: inline-block;
}
.imgCard {
  margin-bottom: 5px;
}
.imgCard :hover {
  cursor: pointer;
}
.imgItem {
  width: 100%;
}
.loadMore:hover {
  cursor: pointer;
}
</style>