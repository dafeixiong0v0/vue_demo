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
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
            </div>
            <div class="ab">
                <div>
                    45
                </div>
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
      div {
        width: 100%;
        height: 100%;
        z-index: 999;
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

