<template>
  <div>
      <h3>
          <div class='icon' @click="iconclick" v-show='iconbol'>
              <icon name='angle-left'></icon>
          </div>
          
          <div>
              {{title}}
          </div>
      </h3>
  </div>
</template>
<script>
export default {
  props:['title'],
  data(){
      return {
          iconbol:''
      }
  },
  mounted:function(){
      this.$store.state.path=this.$route.path;
      console.log(this.$route.path=='/home');
       this.iconbol=true;
      if(this.$route.path=='/home'){
          this.iconbol=false
      }else if(this.$route.path=='/posion'){
          this.iconbol=false
      }else{
          this.iconbol=true
      }
  },
  methods:{
      iconclick:function(){
          console.log('back');
          this.$router.go(-1);
      }
  }
}
</script>
<style lang='less' scoped>
    h3{
        position: relative;

        .icon{
            position: absolute;
            width: 30px;
            height: 30px;
            left: 7.5px;
            top: 7.5px;
            .fa-icon{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
