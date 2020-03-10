<template>
  <div style="width:100%;text-align: center;">
    <el-card
      v-for="(item) in data"
      class="gankItem"
      shadow="hover"
      @click.native="onItemClick(item)"
    >
      <gankItem :desc="item.desc" :who="item.who" :publishedTime="item.publishedAt"></gankItem>
    </el-card>
    <div v-if="loaded" class="loadMore" @click="loadMore">查看更多</div>
    <div v-else>正在加载...</div>
  </div>
</template>
 
<script>
import gankItem from "@/components/gankItem";
export default {
  components: {
    gankItem
  },
  data() {
    return {
      category: null,
      data: [],
      currentPage: 0,
      loaded: true
    };
  },
  created() {
    this.category = this.$route.params.id;
    console.log("AAAA");
    console.log(this.category);
    this.getGankList(this.currentPage + 1);
  },
  watch: {
    $route(to, from) {
      // 路由变化
      var temp = to.fullPath.split("/");
      this.category = temp[2];
      this.data.length = 0;
      this.currentPage = 0;
      this.getGankList(this.currentPage + 1);
    }
  },
  methods: {
    getGankList(index) {
      this.$http
        .get("http://gank.io/api/data/" + this.category + "/10/" + index)
        .then(
          function(res) {
            console.log(this.category);
            console.log(index);
            console.log(res.data.results);
            this.data = this.data.concat(res.data.results);
            this.onLoaded(true);
          },
          function(res) {
            this.onLoaded(false);
          }
        )
        .catch(function(res) {
          this.onLoaded(false);
        });
    },
    onItemClick(item) {
      console.log(item.url);
      window.open(item.url);
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
    }
  }
};
</script>

<style scoped>
.gankItem {
  width: 80%;
  display: inline-block;
}
.gankItem:hover {
  cursor: pointer;
}
.loadMore:hover {
  cursor: pointer;
}
</style>