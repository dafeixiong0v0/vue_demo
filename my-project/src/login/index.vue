<template >
    <div class="login">
        <input type="text" v-model="user">
        <input type="text" v-model="password">
        <div style="display:block">
            {{counter}} 
            <br/>
            子组件传递数据给父组件通过
            <pre>
                <div style="border:1px solid green">
                    //子组件
                    &lt; button v-on:click="<span class="red">incrementCounter</span>"&gt; {{ counter }}&lt;/button &gt;

                    methods: {
                        <span class="red">incrementCounter</span>: function () {
                            this.counter += 1
                            this.$emit('increment')
                            //  this.$emit('<span class="lv">increment</span>')  <span class="lv">increment</span>  父组件里的 @:<span class="lv">increment</span>='xxxxx' 事件
                        }
                    }
                </div>
                -------------------------
                {{aa}}
                -----------------------*-

                父组件通过子组件的事件
                <span class="lv">increment</span>
                &lt;login @:<span class="lv">increment</span>="<span class="red">incrementTotal</span>"&gt; &lt;/login&gt;
                
                <span class="red">incrementTotal</span>: function () {
                    this.aa += 1
                }
                <img src="https://cn.vuejs.org/images/props-events.png" alt="">
            </pre>
            
        </div>
        <button v-on:click="incrementCounter">{{ counter }}</button>
    </div>
</template>
<script>
    export default{
        props:['aa'],
        data(){
            return {
                user:'',
                password:'',
                counter:0
            }
        },
        mounted:function(){
            console.log("这里是mounted")
        },
        methods: {
            incrementCounter: function () {
                this.counter += 1
                this.$emit('increment',this.counter);
                //  this.$emit('increment')  increment  父组件里的 @:increment='xxxxx' 事件
            }
        }
    }
</script>
<style lang="less">
    .login{
        width: 500px;
        input{
            width: 120px;
            margin: auto;
            margin-top: 20px;
        }
        button{
            width: 100px;
            height: 30px;
            margin: auto;
            margin-top: 20px;
            display: block;
        }
    }
    pre{
        img{
            width: 150px;
        }
    }
    .red{
        color: red;
    }
    .lv{
        color: green;
    }
</style>
