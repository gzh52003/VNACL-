<template>
  <div>
    <el-table :data="userlist" style="width: 100%">
      <el-table-column label="ID" prop="id" width="200"></el-table-column>
      <el-table-column label="用户名" prop="username" width="200"></el-table-column>
      <el-table-column label="性别" prop="gender" width="200"></el-table-column>
      <el-table-column label="电话号码" prop="phonenumber" width="250"></el-table-column>
      <el-table-column label="操作" width="200">
       <template v-slot:default="scope">
        <el-button
          size="small"
          plain
          type="success"
          icon="el-icon-edit"
          circle
          @click="goto(scope.row.id)"
        ></el-button>

        <el-button
          size="small"
          plain
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteUser(scope.row.id)"
        ></el-button>
       </template>
      </el-table-column>
    </el-table>
  </div>
</template>
    
     
<script>
import axios from "axios";
export default {
  data() {
    return {
      userlist: [],
      currentId: "",
    };
  },
  methods: {
    async deleteUser(id) {
      this.$confirm("确认删除？", "提示", {
        confirmButtonText: "确定",
        concelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const { data } = await axios.delete("http://localhost:2002/api/user/"+ id);

        if (data.code === 11) {
          this.userlist = this.userlist.filter((item) => item.id !== id);
          this.$message({
            type: "success",
            message: "删除成功！",
          });
        }
      });
    },
    goto(id) {
      
      // this.$router.push("/user/edit/" +id );
      this.$router.push({
        name: "userEdit",
        params: { id },
       
      });
    },
  },
  async created() {
    // console.log("List=",this);
    const result = await axios.get("http://localhost:2002/api/user");
    console.log(result);
    // const {data} = await this.$request.get("/user");
    // console.log(data);
    this.userlist = result.data;
  },
};
</script>