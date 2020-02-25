<template>
  <!--
    左边的菜单
     如果路由没孩子，那么会渲染app-left-item；
     如果路由有孩子，那么会渲染app-left-submenu；
  -->
  <div>
    <div class="app-left-head">
      <span>{{ cutString("小灵狗超级管理系统", 18) }}</span>
    </div>

    <div class="app-left-menu">
      <template v-for="item in getRoutArr">
        <!--app-left-item-->
        <app-left-item
          v-if="!item.children"
          :key="item.fullPath"
          :iconame="item.meta.icon"
          :title="item.meta.title"
          :path="item.fullPath"
          :name="item.name"
          :elem="item"
        />
        <!--app-left-submenu-->
        <app-left-submenu
          v-else
          :key="item.fullPath"
          :iconame="item.meta.icon"
          :title="item.meta.title"
          :name="item.name"
          :index="item.name"
          :elem="item"
          :childs="item.children"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-left",
  components: {
    "app-left-item": () => import("../components/app-left-item.vue"),
    "app-left-submenu": () => import("../components/app-left-submenu.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import url("../../../styles/variables.less");
.app-left-head {
  width: 100%;
  background: #3975df;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid #f0f2f5;
  height: 57px;
  line-height: 57px;
  overflow: hidden;
  .company-logo {
    width: 170px;
  }
  span {
    display: block;
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 19px;
  }
}
.app-left-menu {
  padding: 13px 15px;
}
</style>
