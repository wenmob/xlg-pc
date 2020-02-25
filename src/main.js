import Vue from "vue";
import App from "./App.vue";
require("@/Tools");
/**
 * 引入通用样式
 */
import "@/styles/index.less"; // global css
/**
 * 引入样式的兼容
 */
import "normalize.css/normalize.css";
/**
 * 引入ElementUI
 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { size: "small" });
/**
 * 引入router
 */
import router from "./permission";
/**
 * 引入store
 */
import store from "./store";
/**
 * 引入mixins
 */
import mixins from "@/mixins";
Vue.use(mixins);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
