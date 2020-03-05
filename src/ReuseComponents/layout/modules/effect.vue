<template>
  <div class="effect-out">
    <i class="iconfont ssg" :class="'iconfanhui1'" @click.stop="closeEcff"></i>
    <el-row style="margin-top: 20px;">
      <el-tooltip class="item" effect="dark" content="退出" placement="left">
        <i
          class="iconfont ssg2"
          :class="'icon084tuichu'"
          @click.stop="quit"
        ></i>
      </el-tooltip>
    </el-row>
    <el-row style="margin-top: 20px;">
      <el-tooltip
        class="item"
        effect="dark"
        content="修改密码"
        placement="left"
      >
        <i
          class="iconfont ssg2"
          :class="'iconxiugaimima'"
          @click.stop="modifyPaw"
        ></i>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 关闭工具栏
     */
    closeEcff() {
      this.$emit("closeEcff");
    },
    /**
     * 退出
     */
    quit() {
      this.$emit("run", "quit");
    },
    /**
     * 修改密码
     */
    modifyPaw() {
      this.$emit("run", "modifyPaw");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../styles/variables.less");
.effect-out {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 70px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  padding: 20px 15px;
}
.ssg {
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
.ssg2 {
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: @green;
  }
}
</style>
