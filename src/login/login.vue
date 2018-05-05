<template>
  <div class="big">
      <div class="box">
          <h3>
              一卡通云系统
          </h3>
          <h3>手机版</h3>
          <div class="input_box">
              <div> <p>套账：</p> <input type="text" v-model="user"></div>
              <div> <p>操作员：</p><input type="text"></div>
              <div> <p>密码：</p> <input type="text"></div>
          </div>
          <div class="DL_foot">
              <div><label><input type="checkbox">记住登录状态</label>
              <label> 忘记密码</label></div>
              
              <p>服务器连接正常吗？</p>
              <button v-on:click="tohome(1212,12,12,12)">登录</button>
              <button>注册</button>
          </div>
      </div>
  </div>
</template>
<script>
    // let data=new data();
    export default{
        data() {
            return {
            user: "",
            bolLOG: true,
            test: "121"
            };
        },
        methods:{
            tohome(...a){
                let that=this
                localStorage.setItem("name", that.user);
                console.log(12121,a[0])
                this.$router.push({path:'../home'});
            }
        },
        watch:{
            
        },
        mounted:function(){
            this.$store.state.path=this.$route.path;
            console.log( this.$store.state.path);
        }
    }
</script>
<style lang="less" scoped>
    .big{
        width: 100%;
        height: 100%;
        background-image: url('./../static/image/loginimg/plogin.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position:  center; 
        position: relative;
       
        .box{
            width: 100%;
            height: 10.5rem;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            h3{
                color: #42464F;
                font-size: 0.6667rem;
                text-align: center;
                font-weight: 600;
                &:nth-child(2){
                    margin-top: 0.2667rem;
                }
            }
            .input_box{
                width: 90%;
                height: 4rem;
                margin: auto;
                background-color: #fff;
                border-radius: 0.1333rem;
                overflow: hidden;
                margin-top: 0.1667rem;
                div{
                    width: 100%;
                    height:(4/3rem);
                    border-bottom: 1px solid #f0f0f0;
                    box-sizing: border-box;
                    p{
                        width: 25%;
                        float: left;
                        height: 100%;
                        text-align: right;
                        line-height: (4/3rem);
                        font-size: 0.4rem;
                    }
                    input{
                        width: 75%;
                        height: 100%;
                        border: none;
                        padding: 0;
                        float: right;
                        font-size: 0.4667rem;
                    }
                }
            }
            .DL_foot{
                min-height: 3rem;
                width: 90%;
                margin: auto;
                margin-top: 0.1667rem;
                div{
                    height: 0.7rem;
                    line-height: 0.7rem;
                    label{
                        height: 100%;
                        float: left;
                        &:nth-last-child(1){
                            float: right;
                        }
                        input{
                           vertical-align: middle;
                           margin-top: -2px;
                           margin-bottom: 1px;
                        }
                    }
                }
                p{
                    text-align: center;
                    margin-top: 0.8rem;
                    color:rgb(9, 177, 0);
                }
                button{
                    width: 100%;
                    border: none;
                    display: inline-block;
                    padding: 0.08rem 0.16rem;
                    margin-bottom: 0;
                    font-size: 0.3867rem;
                    font-weight: 400;
                    line-height: 2.42857143;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;
                    -ms-touch-action: manipulation;
                    touch-action: manipulation;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    background-image: none;
                    border: 0.0133rem solid transparent;
                    border-radius: 0.0533rem;
                    margin-bottom: 0.2rem;
                    color: #fff;
                    background-color: #337ab7;
                    border-color: #2e6da4;
                    &:nth-of-type(1){
                        margin-top: 0.4rem;
                    }
                    &:nth-of-type(2){
                       background-color: #fff;
                       border: none;
                       color: #337ab7;
                    }
                }
            }
        }
    }
</style>
