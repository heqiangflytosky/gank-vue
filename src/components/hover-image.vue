<template>
  <div>
    <img class="imgItem" :src="url" />
    <div class="mask">
      <div>{{desc}}</div>
      <div>{{title}}</div>
    </div>
  </div>
</template>

<style>
.imgItem {
  width: 100%;
}
.mask {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: #0000005f; /* 不支持渐变时显示*/
  background: linear-gradient(#00000000, #00000000, #0000005f);
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: start;

  visibility: hidden;
  /* 淡入 - 1秒内从 0% 到 100% 显示: */
  opacity: 0;
  transition: opacity 1s;
}
</style>

<script>
/* eslint-disable */
export default {
  props: ["title", "desc", "url"]
};
</script>
