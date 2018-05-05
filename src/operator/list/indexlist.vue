<template>
  <div class="home">
      <topheader :title='title'></topheader>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                title:''
            }
        },
        mounted:function(){
            console.log(this.$route.query.title);
            this.title=this.$route.query.title
        }
    }
</script>
<style lang="less" scoped>

</style>
