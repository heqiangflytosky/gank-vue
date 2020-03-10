<template>
  <div style="text-align: left;">
    <div style="overflow:hidden;text-overflow: ellipsis;white-space:nowrap;">{{desc}}</div>
    <div style="margin-top:10px;display: flex;align-items: center;">
      <img src="../assets/ic_content_from.png" width="20px" />
      <span class="subTitle">{{who}}</span>
      <img src="../assets/ic_content_time.png" width="20px" style="margin-left:15px" />
      <span class="subTitle">{{formatPublishedTime(publishedTime)}}</span>
    </div>
  </div>
</template>
<style scoped>
.subTitle {
  margin-left: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
<script>
export default {
  props: ["desc", "who","publishedTime"],
  methods: {
    formatPublishedTime (time) {
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
