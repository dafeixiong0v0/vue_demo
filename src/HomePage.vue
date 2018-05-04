<template>
    <div class="home">
        <div :is='prop'>

        </div>
        <!-- <div>这是首页啊！！！！</div> -->
        <nav-botton v-on:increment="po"></nav-botton>
    </div>
</template>
<script>
    import com from './com'
    import user from './user'
    import about from './about'
    import ceshi from './ceshi'
    import App from './App'
    import home from './home'
    export default{
        components:{
            com,home,App,ceshi,about,user
        },
        
        data(){
            return{
                prop:'com'
            }
        },
        methods:{
            po(data){
                console.log(data)
                this.prop=data
            }
        },
        mounted:function(){
            console.log(121212);
            // 我是全局变量=1;
            // console.log('我是全局变量:'+我是全局变量)
        }

    }
</script>
<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        // border: 1px solid #e6e6e6;
        box-sizing: border-box;
    }
</style>
