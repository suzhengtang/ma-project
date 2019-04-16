<template>
    <div class="demo0414">
      <button @click="addData">添加</button>
      <div class="panal" v-show="visible2">
        <su-form @ceshi="closePanal"></su-form>
      </div>
    </div>
</template>

<script>
  import suForm from '../../../components/form/form';
    export default {
        name: "index",
      components: {
        suForm
      },
      data() {
        return {
          visible2: false
        }
      },
      methods:{
        addData() {
          this.visible2 = true
        },
        closePanal(){
          this.visible2 = false
        }
      }
    }
</script>

<style lang="less" scoped>
.demo0414{
  width: 800px;
  height: 600px;
  background: skyblue;
  position: relative;
  left: 0;
  top: 0;
  .panal{
    width: 40%;
    height: 40%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 10px
  }
}
</style>
