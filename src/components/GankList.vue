<template>
  <div style="width:100%;text-align: center;">
    <el-card
      v-for="(item) in data"
      class="gankItem"
      shadow="hover"
      @click.native="onItemClick(item)"
    >
      <div style="text-align: left;">
        <div style="overflow:hidden;text-overflow: ellipsis;white-space:nowrap;">{{item.desc}}</div>
        <div style="margin-top:10px;display: flex;align-items: center;">
          <img src="../assets/ic_content_from.png" width="20px" />
          <span class="subTitle">{{item.who}}</span>
          <img src="../assets/ic_content_time.png" width="20px" style="margin-left:15px" />
          <span class="subTitle">{{formatPublishedTime(item.publishedAt)}}</span>
        </div>
      </div>
    </el-card>
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
    },
    formatPublishedTime(time) {
      // time 日期格式：2018-09-19T00:00:00.0Z
      // UTC 格式

      let cDate = new Date();
      let curYear = cDate.getFullYear();
      let curMonth = cDate.getMonth();
      let curDate = cDate.getDate();
      let curHour = cDate.getHours();
      let curMin = cDate.getMinutes();
      let curSec = cDate.getSeconds();

      let pDate = new Date(Date.parse(time));
      let pubYear = pDate.getFullYear();
      let pubMonth = pDate.getMonth();
      let pubDate = pDate.getDate();
      let pubHour = pDate.getHours();
      let pubMin = pDate.getMinutes();
      let pubSec = pDate.getSeconds();

      if (pubYear < curYear) {
        return curYear - pubYear + "年前";
      } else if (pubMonth < curMonth) {
        return curMonth - pubMonth + "个月前";
      } else if (pubDate < curDate) {
        return curDate - pubDate + "天前";
      } else if (pubHour < curHour) {
        return curHour - pubHour + "小时前";
      } else if (pubMin < curMin) {
        return curMin - pubMin + "分钟前";
      } else if (pubSec < curSec) {
        return curSec - pubSec + "秒前";
      } else {
        return "刚刚";
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
.subTitle {
  margin-left: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
</style>