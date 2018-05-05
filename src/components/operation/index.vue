<template>
    <div class="operationbotton">
        <div>
            <icon name='user-plus'></icon>
            <p>添加</p>
        </div>
        <div>
            <icon name='user-plus'></icon>
            <p>修改</p>
        </div>
        <div>
            <icon name='user-plus'></icon>
            <p>编辑</p>
        </div>
        <div>
            <icon name='user-plus'></icon>
            <p>刷新</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        add:function(e){
            
        }
    }
};
</script>
<style lang="less" scoped>
.operationbotton {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10rem;
  height: 53px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  div {
    width: 25%;
    text-align: center;
    .fa-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
