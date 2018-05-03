<!--
<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <input v-model="parentMsg"> 
        <p>{{parentMsg}}</p>
        <coms v-bind:my-message="parentMsg"></coms> 
        <pre>   
            //my-message是子组件porps接受的参数名
        </pre>
        
    </div>
</template>
<script>
    import coms from './com.vue'
    export default {
        components: {
            coms
        },
        data () {
            return {
                msg: "我是home 组件",
                d:12,
                parentMsg: 'a message from parent'
            }
        }
    }
</script>
-->
<template>
    <div class="home">
        <div class="box_flex">
            <div class="ab">
                <div>
                    <icon name="user" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>
            <div class="ab">
                <div>
                    <icon name="th-large" color="#FFF"></icon>
                </div>
                <div>操作员管理</div>
            </div>

        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  .box_flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 10rem;
    div.ab {
      width: 3.333333rem;
      height: 3.333333rem;
      text-align: center;
      line-height: 3.3333333rem;
      position: relative;
      overflow: hidden;
      z-index: 2;
      div:nth-child(1) {
        width: 2rem;
        height: 2rem;
        z-index: 999;
        margin: 0 auto;
        border-radius: 100%;
        background-color: #31495d;
        text-align: center;
        line-height: 2.7rem;
        margin-top: 0.4rem;
        .fa-icon {
          width: 1rem;
          height: 1rem;
        }
      }
      div:nth-of-type(2){
        width: 100%;
        height: 16px;
        line-height: 16px;
        display: block;
        color: #31495D;
        margin-top: 0.1rem;
        // background-color: #000;
      }
      &:after {
        content: "";
        position: absolute;
        top: -100%;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: rgba(104, 1, 1, 0.1);
        transition: all 1s;
        border-radius: 100%;
        z-index: 1;
      }
      &:hover {
        &:after {
          z-index: 1;
          transform: scale(2) translate(60%, 50%);
        }
      }
    }
  }
}
</style>

