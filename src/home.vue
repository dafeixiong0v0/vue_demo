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