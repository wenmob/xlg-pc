import request from "@/Request";

/**
 * 不需要token的接口
 * @param {*} prarms
 */
export const loginByUsername = prarms => {
  return request({
    url: "/auth/oauth/token",
    method: "post",
    data: prarms,
    noToken: !0
  });
};
