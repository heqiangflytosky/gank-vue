<template>
  <div style="width:100%;text-align: center;">
    <div class="wall">
      <el-col span="12">
        <template v-for="(item,index) in data">
          <el-card
            class="imgCard"
            shadow="hover"
            v-if="index % 2 == 0"
            @click.native="onItemClick(item)"
            :key="item._id"
          >
            <!-- <div class="imgItem">
              <img class="imgItem" :src="item.url" />
              <div class="mask">
                <div>{{item.desc}}</div>
                <div>{{item.title}}</div>
              </div>
            </div> -->
            <hover_image  class="hoverImage" :title="item.title" :desc="item.desc" :url="item.url"/>
          </el-card>
        </template>
      </el-col>
      <el-col span="12">
        <template v-for="(item,index) in data">
          <el-card
            class="imgCard"
            shadow="hover"
            v-if="index % 2 == 1"
            @click.native="onItemClick(item)"
            :key="item._id"
          >
            <hover_image  class="hoverImage" :title="item.title" :desc="item.desc" :url="item.url"/>
          </el-card>
        </template>
      </el-col>
    </div>
    <div v-if="data.length > 0" style="margin-top: 20px;margin-bottom: 20px;">
      <div v-if="showLoadMore && loaded" id="loadMore" @click="loadMore">查看更多</div>
      <div v-else-if="showLoadMore">正在加载...</div>
    </div>
  </div>
</template>

<style>
.wall {
  width: 60%;
  display: inline-block;
}
.imgCard {
  margin-bottom: 5px;
}
.imgCard:hover {
  cursor: pointer;
}
.hoverImage {
  position:relative;
}
#loadMore:hover {
  cursor: pointer;
}

.imgCard:hover .mask{
  visibility: visible;
  opacity: 1;
}
</style>

<script>
/* eslint-disable */
import hover_image from "@/components/hover-image";

export default {
  data() {
    return {
      category: null,
      data: [],
      loaded: true,
      currentPage: 0,
      totalPage: 0,
      showLoadMore: true
    };
  },
  components: {
    hover_image
  },
  created() {
    this.category = this.$route.path;
    console.log(this.category);
    this.getGankList(this.currentPage + 1);
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
        //.get('https://gank.io/api/data/福利/10/' + index)  // v1接口
        .get(
          "https://gank.io/api/v2/data/category/Girl/type/Girl/page/" +
            index +
            "/count/10"
        ) // v2接口
        .then(
          function(res) {
            // v1 接口
            // console.log(res.data.results);
            // this.data = this.data.concat(res.data.results);

            // v2 接口
            console.log(res.data.data);
            this.data = this.data.concat(res.data.data);
            this.totalPage = res.data.total_counts;
            console.log(this.data);
            console.log(this.data.length);
            console.log(this.totalPage);
            this.showLoadMore = this.data.length < this.totalPage;
            console.log(this.showLoadMore);

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
    }
  }
};
</script>
