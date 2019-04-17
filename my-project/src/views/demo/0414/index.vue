<template>
    <div class="demo0414" style="padding:20px;">
      <button @click="addData">添加</button>
      <textarea v-model="sendVal" name="" id="" cols="30" rows="10"></textarea>

      <div class="panal" v-show="visible2">
        <su-form ref="childValue" @ceshi="closePanal" :sendData="nihao"></su-form>
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
          visible2: false,
          sendVal: "",
          nihao: {
            name: "suzhengtagn",
            love: "12",
            age: "2",
            sex: "男"
          }
        }
      },
      methods:{
        addData() {
          this.visible2 = true
        },
        // closePanal(){
        //   debugger;
        //   this.visible2 = false;
        //   let aa = this.$refs.childValue.sendData;
        //   let bb="";
        //   for(let item in aa){
        //     bb += aa[item];
        //   }
        //   this.sendVal = bb;
        // }
        closePanal(data){
          console.log(data)
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
