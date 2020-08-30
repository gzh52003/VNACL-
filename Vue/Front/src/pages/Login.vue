<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="vcode">
        <el-input v-model="ruleForm.vcode">
          <template v-slot:append>
            <div v-html="vcodeSvg" class="vcode" @click="getVcode"></div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        vcode: "",
        mdl: true,
      },
      vcodeSvg: "",
      rules: {
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur",
          },
        ],
        username: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur",
          },
        ],
        vcode: [
          {
            required: true,
            message: "请填写验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid) => {
        if (valid) {
          const { data } = await axios.get("http://localhost:2002/api/login", {
            params: {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              vcode: this.ruleForm.vcode,
            },
            withCredentials: true,
          });

          console.log(this.ruleForm.vcode);
          if (data.code == 10) {
            this.$message({
              message: "验证码不正确",
              type: "error",
            });
          }
          if (data.code == 0) {
            this.$message({
              message: "用户名或密码不正确",
              type: "error",
            });
          } else {
            this.$message({
              message: "登陆成功",
              type: "success",
            });
            // location.href = "https://www.baidu.com"
          }
        } else {
          return false;
        }
      });
    },
    async getVcode() {
      const { data } = await axios.get("http://localhost:2002/api/vcode");
      this.vcodeSvg = data.data;
    },
  },
  created() {
    this.getVcode();
  },
};
</script>