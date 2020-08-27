<template>
  <div>
     <el-table :data="goodslist" style="width: 100%">
      <el-table-column label="ID" prop="id" width="100"></el-table-column>
      <el-table-column label="产品描述" prop="title" width="300"></el-table-column>


      <el-table-column label="产品主图" prop="gender" width="200"></el-table-column>



      <el-table-column label="产品价格" prop="price" width="250"></el-table-column>
       <el-table-column label="产品已售" prop="salerNum" width="200"></el-table-column>
      <el-table-column label="操作" width="200">
       <template v-slot:default="scope">
        <el-button
          size="small"
          plain
          type="success"
          icon="el-icon-edit"
          circle
          @click="goto(scope.row._id)"
        ></el-button>

        <el-button
          size="small"
          plain
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteGood(scope.row.id)"
        ></el-button>
       </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            goodslist:[],
            currentId:"",
        };
    },
    methods:{
        async deleteGood(id){
            this.$confirm("确认删除？","提示",{
                confirmButtonText:"确定",
                concelButtonText:"取消",
                type:"warning",
            }).then(async()=>{
                const {data} = await axios.delete("http://localhost:2002/api/goods/"+ id);
                console.log(data);
                
                if(data.code === 11){
                    this.goodslist = this.goodslist.filter((item) => item.id !== id);
                    this.$message({
                        type:"success",
                        $message:"删除成功",
                    });
                }
            });
        },
        goto(id){
            // 跳转参数路由
            // this.$router.push("/user/edit/" +id + '?a=10');
            this.$router.push({
                name:'userEdit',
                params:{id},
                query:{
                    a:10,b:20
                }
            })
        },
    },
   async created() {
    // console.log("List=",this);
    const result = await axios.get("http://localhost:2002/api/goods");
    console.log(result);
    // const {data} = await this.$request.get("/user");
    // console.log(data);
    this.goodslist = result.data;
  },
}
</script>