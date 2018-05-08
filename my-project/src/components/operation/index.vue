<template>
    <div class="operationbotton">
        <div @click="order2Operate">
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
    render:function(createElement){
      let self = this
        return createElement(
            'div',
            {
                on:{click:function(){
                    console.log('success')
                }},
            },
            self.order2Operate(self.status)
            )
    },
    props:{
        status
    },
    methods:{
        order2Operate(status){
            switch(status){
                case 1:
                    return "待付款"
                    break;
                case 2:
                    return "待成团"
                    break;
                case 3:
                    return "待发货"
                    break;
                case 4:
                    return "待收货"
                    break;
                case 5:
                    return "待评价"
                    break;
                default:
                    return "***"
            }
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
