<template>
  <!--app-left-item-->
  <div
    :class="getItemActive == name ? 'app-left-item item-active' : 'app-left-item'"
    @click.stop="linkRouter"
    v-if="showItem"
  >
    <i
      class="iconfont"
      :class="iconame"
    ></i>
    <el-tooltip
      effect="dark"
      :content="title"
      placement="right"
      v-if="dtitle.indexOf('...') !== -1"
    >
      <span>{{dtitle}}</span>
    </el-tooltip>
    <span v-else>{{dtitle}}</span>
  </div>
</template>
<script>
export default {
  name: "app-left-item",
  props: ["iconame", "title", "path", "name", "elem"],
  computed: {
    showItem() {
      let f = false;
      if (this.elem.meta.authority) {
        if (
          this.getPower.hasOwnProperty(this.elem.meta.authority) &&
          !this.elem.meta.hidden
        ) {
          f = true;
        } else {
          f = false;
        }
      } else {
        if (!this.elem.meta.hidden) {
          f = true;
        } else {
          f = false;
        }
      }
      return f;
    },
    dtitle() {
      const str = this.cutString(this.title, 12);
      return str;
    }
  },
  methods: {
    linkRouter() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../styles/variables.less");
.app-left-item {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: flex-start;
  .yanStyle();
  &:hover {
    color: #9a9b9d;
    cursor: pointer;
  }
  span {
    display: inline-block;
    font-weight: 600;
    margin-left: 10px;
  }
}
.item-active {
  color: #9a9b9d;
}
</style>

