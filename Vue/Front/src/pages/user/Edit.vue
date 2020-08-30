<template>
  <div>
    <h1 v-if="userid">用户编辑</h1>
    <h1 v-else>用户添加</h1>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
     <el-form-item label="ID" prop="id" v-if="!userid">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-if="userid" v-bind:value="ruleForm.username" disabled></el-input>

        <el-input type="text" v-else v-model="ruleForm.username"></el-input>
      </el-form-item>
      
     
      <el-form-item label="性别" >
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
          <el-option label="保密" value="保密"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码" prop="phonenumber">
        <el-input v-model="ruleForm.phonenumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" v-if="userid" @click=submitForm>修改</el-button>
         <el-button type="success" v-else @click=addUser>添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
  
    return {
      userid: "",
      ruleForm: {
        id:"",
        username: "",
        phonenumber:"",
        gender: "男",
       
      },
      rules: {
        phonenumber: [
          { required: true, message: "电话号码必填", trigger: "blur" },
          // { type: "number", message: "只能输入数字", trigger: "blur" },
          {min:11,max:11,message:"长度为11个字符",trigger:"blur"}
        ],
         username: [
          { required: true, message: "用户名必填", trigger: "blur" },
         
          {min:3,max:10,message:"长度为3-10个字符",trigger:"blur"}
        ],
         id: [
          { required: true, message: "ID必填", trigger: "blur" },
         
         
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
         if(data.code ===1){
           this.$message({
             type:"success",
             message:"修改成功"
           });
          
         }
         }else{
          return false;
        }
      })
  },
   addUser() {
      this.$refs["ruleForm"].validate(async (valid)=>{
        if(valid){
          const {id,username,phonenumber,gender} = this.ruleForm;
         let result = await axios.post("http://localhost:2002/api/user" ,{
           id:id*1,
        username,
        phonenumber,
        gender,
         })
        //  console.log(result);
         const data = result.data;
         console.log(data);
         if(data.code ===1){
           this.ruleForm = {
           id:"",
          username: "",
          phonenumber: "",
          gender: "男",
         
        }
           this.$message({
             type:"success",
             message:"添加成功"
           });
           
         }
         }else{
          return false;
        }
      })
  }


  },
  watch:{
    "$route.path":function(newVal,){
      if(newVal=="/user/add"){
        this.userid = ""
         this.ruleForm = {
           id:"",
          username: "",
          phonenumber: "",
          gender: "男",
         
        }
      }
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