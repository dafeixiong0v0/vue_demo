<template>
    <div class="up">
        <h1>User</h1>
        <!-- <div>我是user组件{{msg+'****'}}{{fun}}</div> -->
        <div>我是user组件{{'****'}}{{fun?fun:funa}}</div>
        
    </div>
</template>
<script>
    export default {
        //  1 在组件的内部，可以通过this.$route 来获取到 router 实例。它有一个params 属性，就是来获得这个动态部分的。它是一个对象，属性名，就是路径中定义
        // 的动态部分 id, 属性值就是router-link中to 属性中的动态部分，如123
        // data(){
        //     return{
        //         msg:this.$route.params.id
        //     }
        // },
        // mounted:function(){
        //     return {msg:this.$route.params.id}
        // },
        computed:{
            funa(){
                return this.$route.params.id
            }
        },
        // 这时如果想要在组件来回切换的时候做点事情，那么只能在组件内部（user.vue中）利用watch 来监听$route 的变化。把上面的代码用监听$route 实现
        data () {
            return {
                fun: ''
            }
        },
        watch: {
            $route (to,from){
                // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                console.log(to);
                console.log(from);
                this.fun = to.params.id
            }
        }
    }
    
</script>
<style lang="less">
    .up{
        position: absolute;
        animation: myfirst 2s forwards;
    }
    @keyframes myfirst {
        0%{
            transform: translateX(0)
        };
        100%{
            transform: translateX(100px)
        }
    }
</style>
