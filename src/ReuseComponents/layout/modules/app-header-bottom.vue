<template>
  <div class="app-header-bottom">
    <div
      class="app-header-out"
      ref="scrollDiv"
    >
      <div
        :class="item.name == getTagActive ? 'fang active animated flipInX' : 'fang animated flipInX'"
        v-for="item in getTagView"
        :key="item.name"
        @click="nextUrl(item)"
        @mouseover="overFun(item)"
        @mouseout="outFun"
      >
        <i
          class="iconfont c1"
          :class="'icondian'"
          v-show="item.name == getTagActive"
        ></i>
        <el-tooltip
          effect="dark"
          :content="item.meta.title"
          placement="bottom"
          v-if="dtitle(item.meta.title).indexOf('...') !== -1"
        >
          <span>{{dtitle(item.meta.title)}}</span>
        </el-tooltip>
        <span v-else>{{dtitle(item.meta.title)}}</span>
        <i
          class="iconfont close"
          :class="'iconguanbi'"
          v-show="item.name === activeName"
          @click.stop="deteleFun(item)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header-bottom",
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    nextUrl(row) {
      this.$router.push(row.fullPath);
    },
    overFun(row) {
      this.activeName = row.name;
    },
    outFun() {
      this.activeName = "";
    },
    dtitle(str) {
      let s = "";
      if (str) {
        s = this.cutString(str, 10);
      }
      return s;
    },
    deteleFun(row) {
      if (this.getTagView.length === 1) {
        return false;
      }
      if (row.name == this.getTagActive) {
        const n = this.getTagView.findIndex(ele => {
          return ele.name == row.name;
        });
        let url = "";
        if (n == 0) {
          url = this.getTagView[n + 1].path;
        } else {
          url = this.getTagView[n - 1].path;
        }
        this.delTagView(row);
        this.$router.push(url);
      } else {
        this.delTagView(row);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../styles/variables.less");
.app-header-bottom {
  position: relative;
  width: 100%;
  height: 32px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.app-header-bottom::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0.6rem; /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}
.app-header-bottom::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  background: #ccc;
}
.app-header-bottom::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0);
  border-radius: 5px;
  background: #3b424e;
}
.app-header-out {
  position: absolute;
  top: 0px;
  left: 0px;
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .fang {
    position: relative;
    display: flex;
    min-width: 110px;
    justify-content: flex-start;
    padding: 0px 24px;
    height: 29px;
    color: #333;
    text-align: center;
    line-height: 29px;
    font-size: 13px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    margin-right: -1px;
    overflow: hidden;
    .yanStyle();
    &:hover {
      cursor: pointer;
    }
    .c1 {
      position: absolute;
      font-size: 20px;
      left: 0px;
      top: 0px;
    }
    .close {
      position: absolute;
      right: 5px;
      top: 0px;
    }
  }
}
.active {
  color: #333 !important;
  background: #f0f2f5 !important;
}
</style>


