<template>
  <div class="ccont">
    <div class="cc-right">
      <div class="login-cont">
        <img
          class="log"
          src="/static/images/logo.png"
        />
        <h4 class="hh1">小灵狗超级管理平台</h4>
        <el-form
          class="hform"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item
            class="h-f-item"
            prop="username"
          >
            <el-col :span="3">
              <i class="iconfont iconyonghu hicon"></i>
            </el-col>
            <el-col :span="21">
              <el-input
                type="text"
                class="hput"
                v-model="ruleForm.username"
                auto-complete="off"
                clearable
              />
            </el-col>
          </el-form-item>

          <el-form-item
            class="h-f-item"
            prop="password"
          >
            <el-col :span="3">
              <i class="iconfont iconsuo hicon"></i>
            </el-col>
            <el-col :span="19">
              <el-input
                :type="pwdType"
                class="hput"
                v-model="ruleForm.password"
                auto-complete="off"
                clearable
              />
            </el-col>
            <el-col :span="2">
              <i
                class="iconfont iconzhengyan hicon"
                v-if="pwdType == 'password'"
                @click="pwdType = 'text'"
              ></i>
              <i
                v-else
                class="iconfont iconbiyan hicon"
                @click="pwdType = 'password'"
              ></i>
            </el-col>
          </el-form-item>

          <!-- <el-form-item
            class="h-f-item"
            prop="code"
          >
            <el-col :span="3">
              <i class="iconfont iconanquan hicon"></i>
            </el-col>
            <el-col :span="13">
              <el-input
                type="text"
                class="hput"
                v-model="ruleForm.code"
                clearable
              />
            </el-col>
            <el-col :span="8">
              <img
                class="himg"
                src=""
              />
            </el-col>
          </el-form-item> -->

          <el-form-item>
            <el-button
              class="hbtn"
              type="primary"
              plain
              :loading="btnLoad"
              @click="submitForm('ruleForm')"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-footer">
        <span>©2019 宁波小灵狗出行科技有限公司 | 浙ICP备16004082号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      pwdType: "password",
      ruleForm: {
        username: "",
        password: ""
      },
      btnLoad: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.listenEnter();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.btnLoad = true;
          login(this.ruleForm)
            .then(res => {
              this.btnLoad = false;
              setToken(res);
              this.$router.push({ path: "/app" });
            })
            .catch(() => {
              this.btnLoad = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * 监听enter键
     */
    listenEnter() {
      document.onkeydown = event => {
        const e = event || window.event;
        if (e && e.keyCode === 13) {
          // 回车键的键值为13
          this.submitForm("ruleForm");
        }
      };
    }
  }
};
</script>

<style lang="less">
.ccont {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("/static/images/login-bg.jpg") no-repeat left bottom;
  background-size: cover;
}
.cc-right {
  position: absolute;
  width: 600px;
  height: 100%;
  top: 0px;
  right: 0px;
  background: #fff;
}
.login-cont {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align: center;
  .log {
    width: 200px;
  }
  .hh1 {
    font-size: 20px;
    font-weight: lighter;
    margin: 0px;
    padding: 0px;
    margin-top: 7px;
  }
  .hform {
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;
    .h-f-item {
      height: 40px;
      border-bottom: 1px solid #ccc;
      line-height: 40px;
      &:hover {
        border-bottom: 1px solid #2a74e7;
      }
    }
  }
  .hicon {
    display: inline-block;
    font-size: 24px;
    color: #9a9b9d;
    margin-top: 5px;
  }
  .hput {
    border-style: none;
    outline: none;
    padding: 5px 7px;
    width: 100%;
    height: 38px;
    font-size: 15px;
    .el-input__inner {
      border-style: none;
      height: 34px;
      font-size: 15px;
    }
  }
  .himg {
    width: 100px;
    height: 38px;
  }
  .hbtn {
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 30px;
  }
}
.login-footer {
  position: absolute;
  width: 100%;
  font-size: 12px;
  text-align: center;
  bottom: 26px;
}
</style>


