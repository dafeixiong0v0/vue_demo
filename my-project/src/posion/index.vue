<template>
    <div class="home">
        <topheader :title='title'></topheader>
        <div class="personal-center tab">
            <div class="person-info">
                <img class="pic" src="">
                <div class="person-ele">
                    <p>帐套：
                        <span id="CustomerNameS">套账1</span>
                    </p>
                    <p>操作员：
                        <span id="UserNameS">SYSTEM</span>
                    </p>
                    <p>登录时间：
                        <span id="LoginTimeS">2018-05-04 11:00:26</span>
                    </p>
                </div>
            </div>
            <div class="person-info-other">
                <ul>
                    <li id="toHelpDoc">帮助</li>
                    <li id="change-password">修改密码</li>
                    <li id="find-back-pw">找回密码</li>
                    <li id="out-login">退出登录</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'个人中心'
        }
    }
};
</script>
<style lang="less" scoped>
.person-info {
  padding: 0.0667rem 0.1333rem 0.1333rem 2.66666rem;
  position: relative;
  border-bottom: 0.0133rem solid #e7e7e7;
  min-height: 1.2rem;
  .pic {
    width: 2.0667rem;
    height: 2.0667rem;
    position: absolute;
    top: 0.4rem;
    left: 0.2333rem;
    border: 0.0133rem solid #e7e7e7;
    border-radius: 2.6667rem;
    overflow: hidden;
  }
  .person-ele p {
    height: 0.9rem;
    line-height: 0.9rem;
  }
}
.person-info-other ul li {
    border-bottom: 0.0133rem solid #e7e7e7;
    padding: 0.2133rem 0.8rem 0.2133rem 0.4rem;
    // background: url(../images/go.png) no-repeat;
    background-size: 0.4267rem;
    background-position: 99.2% center;
    color: #42464F;
}
</style>
