<template>
  <div style="border: 1px solid red;">
    <!-- <span style="position:absolute" @click='func($event)' @mousemove.stop="mov_le($event)">{{ message }}</span> -->
    <!-- <input type="text" v-bind:message="message"> -->
    <h3 style="color:red">这是com组件</h3>
    <span>{{myMessage}}</span>
  </div>
  
 
</template>

<script>
  let a;
  export default {
    props:['myMessage'],
    created () {
      this.message =this.message+ 'bye!'
    },
    methods:{
      func:function($e){
        console.log($e);
        this.message='lala'
      },
      mov_le:function($e){
        console.log(a);
        console.log(a!=undefined)
        if(a||(a==a&&a!=undefined)){
          a=$e.clientX;
        }else{
          a=$e.clientX;
        }
        
        let l=$e.clientX
        $e.target.style.left=l-a+'px';
        console.log(a,l)
      }
    }
  }
</script>