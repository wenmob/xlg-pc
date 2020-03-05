import router from "./Router";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.length === 0) {
    next("/home");
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default router;
