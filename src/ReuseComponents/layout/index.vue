<template>
  <el-container @click.native="mainClick">
    <!--左边-->
    <el-aside class="lay-l" width="240px">
      <app-left></app-left>
    </el-aside>
    <!--右边-->
    <el-container>
      <!--头部-->
      <el-header class="lay-r-top" height="81px">
        <!--路由历史区域-->
        <div class="route-log">
          <app-header-top></app-header-top>
          <app-header-bottom></app-header-bottom>
        </div>
        <!--其他功能区-->
        <div class="other-feat">
          <el-tooltip
            class="item"
            effect="dark"
            content="工具"
            placement="bottom"
          >
            <i
              class="iconfont effect"
              :class="'icongongju'"
              @click.stop="openEcff"
            ></i>
          </el-tooltip>
        </div>
      </el-header>
      <!--内容区域-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!--右边浮动框-->
    <transition name="slidef-fade">
      <effect
        v-show="effectShow"
        @closeEcff="closeEcff"
        @run="effectRun"
        @mouseenter.native="openff"
        @mouseleave.native="closeff"
      ></effect>
    </transition>
    <!--弹出框-->
    <!-- <el-dialog
      :title="dog.title"
      :visible.sync="dog.visible"
      :width="dog.width"
      @closed="dogClosed"
    >
      <edit-password
        v-if="dog.index == 0"
        @close="closeDog"
        ref="dialogDiv"
      ></edit-password>
    </el-dialog> -->
  </el-container>
</template>

<script>
// import { removeToken } from "@/utils/auth";
// import { dict, logout } from "@/api/login";
export default {
  name: "layout",
  data() {
    return {
      effectShow: false,
      effectfuter: 0,
      dog: {
        title: "",
        visible: false,
        width: "360px",
        index: -1,
        data: ""
      }
    };
  },
  components: {
    "app-left": () => import("./modules/app-left.vue"),
    "app-header-top": () => import("./modules/app-header-top.vue"),
    "app-header-bottom": () => import("./modules/app-header-bottom.vue"),
    effect: () => import("./modules/effect.vue")
    // "edit-password": () => import("./dialog/edit-password")
  },
  beforeMount() {
    this.initDict();
  },
  methods: {
    // 鼠标移入的效果
    openff() {
      this.effectfuter = 1;
      this.effectShow = true;
    },
    // 鼠标移开的效果
    closeff() {
      if (this.$refs.dialogDiv) {
        this.effectfuter = 2;
      } else {
        this.effectfuter = 0;
      }
    },
    // 判断是否点击了黑框
    mainClick() {
      if (this.effectfuter == 1) {
        this.effectShow = true;
      } else if (this.effectfuter == 0) {
        this.effectShow = false;
      }
    },
    // 打开工具栏
    openEcff() {
      this.effectShow = true;
    },
    // 关闭工具
    closeEcff() {
      this.effectShow = false;
    },
    /**
     * 关闭弹出框的效果
     */
    dogClosed() {
      this.dog.index = -1;
      this.dog.data = "";
      this.effectfuter = 0;
    },
    /**
     * 取消弹出框
     */
    closeDog() {
      this.dog.visible = false;
    },
    // 执行工具
    effectRun(action) {
      if (action == "modifyPaw") {
        this.dog.title = "修改密码";
        this.dog.width = "400px";
        this.dog.index = 0;
        this.dog.visible = true;
      } else if (action == "quit") {
        this.$confirm("确认要退出吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            console.log("确认退出");
            // removeToken();
            // logout().then(() => {
            //   this.$router.push({ path: "/login" });
            // });
          })
          .catch(() => {
            console.log("取消退出");
          });
      }
    },
    // 获取企业的数据并保存在store
    initDict() {
      // dict().then(res => {
      //   this.setDict(res);
      // });
    }
  }
};
</script>

<style lang="less" scoped>
.lay-l {
  background: #fff;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  -moz-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
.lay-r-top {
  display: flex;
  justify-content: flex-start;
  background: #fff;
}
.route-log {
  width: 100%;
  height: 100px;
}
.other-feat {
  position: absolute;
  width: 20px;
  height: 21px;
  right: 20px;
  top: 0px;
}
.effect {
  float: right;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
}
</style>
