<template>
  <div class="home">
    <topheader :title='title'></topheader>
    <ul>
      <li class="listLi" v-for="item in items">
        <div class="box" @click.prevent='setnexttitle' :data-title='item.title' :data-link='item.link'>
          <icon :name='item.icon'></icon>
          <div class="titleBox">
            <h5>{{item.title}}</h5>
            <i>{{item.conten}}</i>
          </div>
          <!-- <span class="enterBtn"></span> -->
          <icon name='angle-right' class="enterBtn"></icon>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "操作员管理",
      items: [
        {
          title: "操作员列表",
          conten: "此页面可添加删除修改操作员",
          icon: "users",
          link:'indexlist'
        },
        {
          title: "操作员日志",
          conten: "此页面显示操作员操作日志",
          icon: "file",
          link:'indexlist'
        }
      ],
      nexttitle:''
    };
  },
  mounted: function() {
    this.$http
      .post("WebUI/WebAPI/ClientUser/GetLoginUser"
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods:{
    setnexttitle:function(ev){
      // if (ev.target === ev.currentTarget) {
          //从绑定目标触发
          let e=event.currentTarget;
          console.log(e.dataset.title)
          this.$router.push({path:'/operator/indexlist',query:{title:e.dataset.title}})
      // }
      
    }
  }
};
</script>
<style lang="less" scoped>
li.listLi {
  width: 100%;
  height: 2.1333rem;
  border-bottom: 0.0133rem solid #eee;
  box-sizing: border-box;
  .box {
    display: block;
    color: rgb(50, 73, 92);
    height: 100%;
    cursor: pointer;
  }
}
.fa-icon {
  width: 1.8667rem;
  height: 1.8667rem;
  padding: 0.4rem;
  float: left;
  background: white;
  box-sizing: border-box;
}
.titleBox {
  float: left;
  height: 100%;
  padding: 0.1333rem;
  box-sizing: border-box;
}
.enterBtn {
  // background: url(/WebUI/images/go.png) no-repeat center;
  float: right;
  width: 0.2rem;
  height: 100%;
  padding: 0;
  margin-right: 0.3rem;
  background-color: #fff;
}
.titleBox h5 {
  font-weight: 700;
  height: 1.0667rem;
  line-height: 1.0667rem;
  font-size: 0.4267rem;
}
.titleBox i {
  color: #adacac;
  font-style: normal;
  font-size: 0.32rem;
}
</style>
