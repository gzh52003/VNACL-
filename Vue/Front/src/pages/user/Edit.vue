<template>
  <div>
    <h1>用户编辑</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="用户名" >
        <el-input type="text" v-bind:value="ruleForm.username" disabled></el-input>
      </el-form-item>
     
      <el-form-item label="性别" >
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="baomi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码" prop="phonenumber">
        <el-input v-model="ruleForm.phonenumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click=submitForm>修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
  
    return {
      userid: "1",
      ruleForm: {
        username: "",
        phonenumber:"",
        gender: "male",
       
      },
      rules: {
        phonenumber: [
          { required: true, message: "电话号码必填", trigger: "blur" },
          // { type: "number", message: "只能输入数字", trigger: "blur" },
          {min:11,max:11,message:"长度为11个字符",trigger:"blur"}
        ],
       
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid)=>{
        if(valid){
          const {userid,ruleForm} = this;
         let result = await axios.put("http://localhost:2002/api/user/" + userid,{
           ...ruleForm,
         })
        //  console.log(result);
         const data = result.data;
         console.log(data);



          alert("修改成功")
        }else{
          return false;
        }
      })
  }
  },
  async created() {
    const { id } = this.$route.params;
    console.log(id);
    const { data } = await axios.get("http://localhost:2002/api/user/"+id)
    Object.assign(this.ruleForm,data[0])
    this.userid = id;
  
    console.log(data);
  },
};
</script>