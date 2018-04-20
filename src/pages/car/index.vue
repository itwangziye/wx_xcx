<!--  -->
<template>
  <div>
      {{msg}}
      <div class="test-wap" @click="handelClick">
          <div class="test-inner">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        msg:'wzyzzz'
    };
  },
  methods:{
      handelClick(){
          console.log('sdfds')
      }
  }
}

</script>
<style scoped lang="scss">
    .test-wap{
        width: 200px;
        height: 200px;
        margin: 20px auto;
        background-color: blue;
        .test-inner{
            width: 50px;
            height: 50px;
            background-color: red;

        }
    }
</style>