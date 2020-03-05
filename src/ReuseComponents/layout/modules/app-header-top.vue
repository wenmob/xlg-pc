<template>
  <div class="app-header-top">
    <span
      class="iconfont iconweibiaoti-_saoyisao-mian"
      style="margin-left: 7px;"
    ></span>
    <span class="s2">&nbsp;{{ fontJade }}</span>
    <div class="app-h-r">
      <img class="m1" src="/static/images/yonghu.png" />
      <span class="s1">系统管理员-开发</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header-top",
  computed: {
    fontJade() {
      const str = this.getItemName.substring(2, this.getItemName.length);
      return str;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../styles/variables.less");
.app-header-top {
  position: relative;
  height: 57px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  min-width: 400px;
  line-height: 57px;
  background: #2a74e7;
  overflow: hidden;
  border-bottom: 1px solid #f0f2f5;
  span {
    display: inline-block;
  }
}
.app-h-r {
  position: absolute;
  right: 80px;
  top: 0px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .m1 {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-top: 13px;
  }
  .s1 {
    display: inline-block;
    font-size: 14px;
    margin-top: -2px;
    margin-left: 7px;
  }
}
</style>
