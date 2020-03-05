<template>
  <div class="p-container bgStyle">
    <div class="error-main">
      <div class="error-left">
        <h4>出错啦！</h4>
        <h5>抱歉页面不存在</h5>
        <h5>您可以刷新试试！</h5>
        <el-button type="success" style="width: 150px" @click="goHome"
          >返回首页</el-button
        >
      </div>
      <div class="error-right">
        404
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nulled",
  methods: {
    goHome() {
      this.$router.push({ path: "/layout" });
    }
  }
};
</script>

<style lang="less" scoped>
.error-main {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 0 auto;
  padding-top: 100px;
  .error-left {
    color: #fff;
  }
  .error-right {
    width: 160px;
    height: 160px;
    font-size: 50px;
    background: #fff;
    color: #4ca35d;
    border-radius: 160px;
    text-align: center;
    line-height: 160px;
  }
}
.bgStyle {
  background: #4ca35d;
}
</style>
