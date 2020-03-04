const url = "http://pigx-gateway:9999";
const devProxy = ["/admin/"];
let proxyObj = {};
devProxy.forEach(value => {
  proxyObj[value] = {
    target: url,
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: value === "/admin/" ? "" : value
    }
  };
});
module.exports = proxyObj;
