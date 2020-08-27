<template>
  <div>
    <h1>订单管理</h1>
    <!-- <label for="#">{{trees}}</label> -->
    <el-table :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" max-height="850">
      <el-table-column prop="orders" label="订单号" width="200"></el-table-column>
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="用户" width="120"></el-table-column>
      <el-table-column prop="commodity" label="商品" width="200" show-overflow-tooltip></el-table-column>
      <el-table-column prop="address" label="地址" width="300" show-overflow-tooltip></el-table-column>，订单号，日期，用户。商品 地址，
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, userList)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>

                      </el-table>
                          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="userList.length">   
                        </el-pagination>
                    <!-- </el-table> -->
  
  </div>
</template>
<script>
export default {
  
  created() {
        this.handleUserList()
    },
    methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
        // handleUserList()
        // handleUserList() {
        //     this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
        //         this.userList = res.body
        //     })
        // }
         deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    },
  
  
  
  
  // methods: {
    // deleteRow(index, rows) {
    //   rows.splice(index, 1);
    // },
  // },
  data() {
    return {
                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
      userList: [
        {
          orders: "123419",
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          commodity: "15ESSENTIALS德系眼部精油",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123418",
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          commodity: "可贝尔水晶公主黑金臻宠多效贴膜",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123417",
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          commodity: "ConnieAroma液晶抗皱纹眼霜",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123416",
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          commodity: "可贝尔海洋臻萃眼纹法令纹贴膜",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123415",
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          commodity: "JOLLYONE名媛微雕霜奢宠组",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123414",
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          commodity: "ChristianBernard鎏金精华液",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123413",
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          commodity: "DR.SOS缓龄塑颜尊享双11限量组",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123421",
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          commodity: "DR.MAXSKIN肌净凝胶",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123411",
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          commodity: "以色列Sal-Vento修复抗衰尊享组",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123444",
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          commodity: "DermaWand射频美容仪",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          orders: "123456",
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          commodity: "澳洲原装进口亚瑟蒂莉焕颜养肤皂",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>
