import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import directives from "./directives";
export default {
  install(Vue) {
    Vue.mixin({
      directives: {
        ...directives
      },
      computed: {
        ...mapGetters([
          "getItemName",
          "getTagView",
          "getTagActive",
          "getRoutArr",
          "getItemActive",
          "getPower",
          "getDict"
        ])
      },
      methods: {
        ...mapActions([
          "setItemActive",
          "setItemName",
          "setRoutArr",
          "setTagView",
          "delTagView",
          "setTagActive",
          "setPower",
          "setDict"
        ]),
        // 获取路由的数组，并去掉layout
        getSilderArr(arr) {
          const n = arr.findIndex(ele => {
            return ele.name === "layout";
          });
          if (n != -1) {
            const silderArr = arr[n].children;
            this.setRoutArr(silderArr);
          } else {
            const arr2 = arr.filter(ele => {
              if (ele.children) {
                return ele;
              }
            });
            this.getSilderArr(arr2[0].children);
          }
        },
        // 路由的遍历
        routerTraversing(router, str, str2) {
          router.forEach(ele => {
            if (str.indexOf(ele.name) !== -1) {
              str2 = str2 + " > " + ele.meta.title;
              this.setItemName(str2);
            }
            if (ele.children) {
              this.routerTraversing(ele.children, str, str2);
            }
          });
        },
        // 限制字符串长度
        cutString(str, len) {
          if (!str) {
            return "";
          }
          if (str.length * 2 <= len) {
            // length属性读出来的汉字长度为1
            return str;
          }
          let strlen = 0;
          let s = "";
          for (let i = 0; i < str.length; i++) {
            s = s + str.charAt(i);
            if (str.charCodeAt(i) > 128) {
              strlen = strlen + 2;
              if (strlen >= len) {
                return s.substring(0, s.length - 1) + "...";
              }
            } else {
              strlen = strlen + 1;
              if (strlen >= len) {
                return s.substring(0, s.length - 2) + "...";
              }
            }
          }
          return s;
        },
        time(val, format) {
          return val ? moment(val).format(format || "YYYY-MM-DD HH:mm:ss") : "";
        }
      },
      filters: {
        time(val, format) {
          return val ? moment(val).format(format || "YYYY-MM-DD HH:mm:ss") : "";
        }
      }
    });
  }
};
