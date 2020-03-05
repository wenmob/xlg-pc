<template>
  <!--app-left-submenu-->
  <div
    class="app-left-submenu"
    @click.stop="openItem"
    v-if="getPower.hasOwnProperty(elem.meta.authority)"
  >
    <div class="label">
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
      <i
        class="iconfont sv"
        :class="open ? 'iconup' : 'icondown'"
      ></i>
    </div>
    <!--child-->
    <el-collapse-transition>
      <div
        class="sub-child"
        v-show="open"
      >
        <template v-for="child in childs">
          <!--app-left-item-->
          <app-left-item
            v-if="!child.children"
            :key="child.fullPath"
            :iconame="child.meta.icon"
            :title="child.meta.title"
            :path="child.fullPath"
            :name="child.name"
            :elem="child"
          />
          <!--app-left-submenu-->
          <app-left-submenu
            v-else
            :key="child.fullPath"
            :iconame="child.meta.icon"
            :title="child.meta.title"
            :name="child.name"
            :index="child.name"
            :elem="child"
            :childs="child.children"
          />
        </template>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
export default {
  name: "app-left-submenu",
  props: ["iconame", "title", "childs", "name", "index", "elem"],
  data() {
    return {
      open: false
    };
  },
  components: {
    "app-left-item": () => import("./app-left-item"),
    "app-left-submenu": () => import("./app-left-submenu")
  },
  computed: {
    dtitle() {
      const str = this.cutString(this.title, 12);
      return str;
    }
  },
  mounted() {
    this.initMenu();
  },
  methods: {
    // 进入页面根据路由展开对应的菜单
    initMenu() {
      const fullPath = this.$route.path;
      const urlTop = fullPath.indexOf("/");
      const urlBottom = fullPath.lastIndexOf("/");
      const str1 = fullPath.substring(urlTop + 1, urlBottom);
      const narr = str1.split("/");
      if (narr.includes(this.name)) {
        this.open = true;
      }
    },
    // 展开菜单
    openItem() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    }
  },
  watch: {
    $route(val) {
      this.initMenu();
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../styles/variables.less");
.app-left-submenu {
  .label {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    display: flex;
    color: #333;
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
    .sv {
      position: absolute;
      top: 14px;
      right: 0px;
    }
  }
}
.sub-child {
  padding-left: 15px;
}
</style>


