<template>
    <div class="demo0414" style="padding:20px;">
      <button @click="addData">添加</button>
      <textarea v-model="sendVal" name="" id="" cols="30" rows="10"></textarea>
      <ul>
        <li>
          <label for="">姓名：</label>
          <input type="text" v-model="disAbled.name" disabled>
        </li>
        <li>
          <label for="">年龄：</label>
          <input type="text" v-model="disAbled.age" disabled>
        </li>
        <li>
          <label for="">性别：</label>
          <input type="text" v-model="disAbled.sex" disabled>
        </li>
        <li>
          <label for="">爱好：</label>
          <input type="text" v-model="disAbled.love" disabled>
        </li>
      </ul>

      <div class="panal" v-show="visible2">
        <su-form ref="childValue" @ceshi="closePanal" @sendData="sendDataFun" :send-data="sendData"></su-form>
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
          disName: "",
          disAbled: {
            name: "",
            love: "",
            age: "",
            sex: ""
          },
          sendData: {
            name: "测试",
            love: "唱歌",
            age: "18岁",
            sex: "女"
          }
        }
      },
      methods:{
        addData() {
          this.visible2 = true
        },
        closePanal(data){
          this.sendData = {};
          this.visible2 = false;
        },
        sendDataFun(data) {
          this.disAbled = data;
          this.sendData = {};
          this.visible2 = false;
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
