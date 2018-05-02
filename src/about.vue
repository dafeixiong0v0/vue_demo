<template>
    <div class="up">
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <div @click='routerGG()'>点我</div>
        <ast :my-message="parentMsg"></ast>
        <p>{{tle1}}:<comp :total="123+456"></comp></p>  
        <p>{{tle2}}:<comp :total="1023+456"></comp></p>  

        <input type="text" v-model="parentMsg">
        <p>{{ total }}</p>
        <login v-on:increment="incrementTotal" :aa='totala'></login> 
        <logina v-on:increment="incrementTotal" :aa='totala'></logina>
        {{totala}}
        {{$route.path}}
        <nav-botton></nav-botton>
    </div>
</template>
<script>
    import ast from './com.vue'
    import comp from './表达式计算，传递值.vue';
    import login from './login/index.vue'
     import logina from './login/index.vue'
    export default {
        components: {
            comp,ast,login,logina
        },
        data () {
            return {
                aboutMsg: '我是about组件',
                tle1: '这里传递是字符串',  
                tle2: '用了v-bind动态语法，传递值会通过js的表达式计算，得到个值' ,
                parentMsg:'121212',
                totala:0,
                total:0
            }
        },
        mounted(){
            
        },
        methods:{
           
                incrementTotal: function(e){
                    this.totala=this.totala+1;
                    return this.totala=e;
                },
                routerGG:function(){
                    console.log(1212, this.$route)
                    this.$route.path({path:'home'});
                    console.log(1212)
                }
            
        }
    }
</script>
<style lang="less" scoped>
    .up{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
