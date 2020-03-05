<template>
  <div>
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
    >
      <el-form-item
        label="原密码"
        prop="passwd"
      >
        <el-input
          type="password"
          v-model="ruleForm2.passwd"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="newPasswd"
      >
        <el-input
          type="password"
          v-model="ruleForm2.newPasswd"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认新密码"
        prop="checkPass"
      >
        <el-input
          type="password"
          v-model="ruleForm2.checkPass"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="submitForm('ruleForm2')"
        >确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { modifyPassword } from "@/api/login";
export default {
  data() {
    const checkPasswd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("原密码不能为空"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        const re = /^[A-Za-z0-9]+$/;
        if (!re.test(value) || value.length < 6 || value.length > 20) {
          callback(new Error("支持长度6~20位字符，英文和数字"));
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.newPasswd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm2: {
        newPasswd: "",
        checkPass: "",
        passwd: ""
      },
      rules2: {
        newPasswd: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        passwd: [{ validator: checkPasswd, trigger: "blur" }]
      }
    };
  },
  methods: {
    /**
     * 取消功能
     */
    cancel() {
      this.$emit("close");
    },
    /**
     * 提交的按钮
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          modifyPassword(this.ruleForm2)
            .then(() => {
              this.loading = false;
              this.$emit("close");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>


