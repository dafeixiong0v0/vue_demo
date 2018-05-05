<template>
    <div class="home">
        <topheader :title='title'></topheader>
        {{items}}
        <ul>
            <li v-for="(item,index) in items">
                <input type="checkbox" v-model="indexarr" :name="index" :value="index"> 
                <span>{{item.PeopleName}}</span><span>{{item.Phone}}</span>
            </li>
            {{indexarr}}
        </ul>
        <operationBotton></operationBotton>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      items:'',
      indexarr:[]
    };
  },
  mounted: function() {
    let that=this;
    console.log(this.$route.query.title);
    this.title = this.$route.query.title;
    // this.$http
    //   .post("/WebUI/WebAPI/ClientUser/GetUserListOnPage",{pageSize:10,pageNumber:1})
    //   .then(function(response) {
    //     console.log(response);
    //     that.items=response
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //     that.items=error
    //   });
    var params = new URLSearchParams();
    params.append('pageSize', 10);       //你要传给后台的参数值 key/value
    params.append('pageNumber', 1);
    console.log(params)
    this.$axios({
      method: "post",
      url: "/WebUI/WebAPI/ClientUser/GetUserListOnPage",
      data:params
    }).then(function (data) {
        console.log(data);
        console.log(data.rows);
        that.items=data.data.rows
    })


    // $.ajax({
    //     type: "post",
    //     url: "/WebUI/WebAPI/ClientUser/GetUserListOnPage",
    //     data: {
    //         pageSize:10,pageNumber:1
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //         console.log(response)
    //     }
    // });
  }
};
</script>
<style lang="less" scoped>

</style>
