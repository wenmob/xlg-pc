export default {
  /**限制input 输入只能输入整数*/
  Int(el) {
    let ele = el.tagName === "INPUT" ? el : el.querySelector("input");
    ele.oninput = function() {
      let val = ele.value;
      val = val.replace(/[^0-9]/g, "");
      ele.value = val;
    };
  }
};
