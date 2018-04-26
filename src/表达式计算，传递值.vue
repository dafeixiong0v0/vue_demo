<template>
    <div style="border:5px solid blue">
        <h1 style="color:blue">这是父组件  表达式计算，传递值  props区块是注册可能用到的变量。</h1>
        <span>total: {{total}}</span>
        <pre>下面是来自com.vue的组件</pre>
        <ast v-bind:my-message="parentMsg"></ast>
        <button @click="add()">{{parentMsg}}</button>
    </div>


</template>
<script>
    import ast from './com'
    export default{
        components:{
                ast
        }
        ,
        props: ["total","mymessage"],
        data(){
            return{
                parentMsg:'15225555'
            }
        },
        methods:{
            add(){
                this.parentMsg++
            }
        }
    }
</script>