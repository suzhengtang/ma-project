<template>
    <div class="form-box">
      <form action="">
        <ul>
          <li>
            <label for="">{{formName}}</label>
            <input v-model="sendData.name" type="text" :placeholder="formHolder">
          </li>
          <li>
            <label for="">{{formAge}}</label>
            <input v-model="sendData.age" type="text" :placeholder="formHolder">
          </li>
          <li>
            <label for="">{{formSex}}</label>
            <input v-model="sendData.sex" type="radio" name="sex" value="男">男
            <input v-model="sendData.sex" type="radio" name="sex" value="女">女
          </li>
          <li>
            <label for="">{{formLove}}</label>
            <select name="" id="" v-model="sendData.love">
              <option v-for="(item,index) in selectLove" :value=index>{{item}}</option>
            </select>
          </li>
          <li class="btn">
            <input @click="submitSend" type="button" value="提交">
            <input @click="closeModel" type="button" value="取消">
          </li>
        </ul>
      </form>
    </div>
</template>

<script>
    export default {
        name: "form",
      data() {
          return {
            formName: "名称：",
            formLove: "爱好：",
            formAge: "年龄：",
            formSex: "性别：",
            formHolder: "请输入",
            formSelect: "请选择你的爱好",
            selectLove: ["篮球","台球","唱歌","看书"],
            sendData: {
              name: "",
              love: "1",
              age: "",
              sex: "男"
            }
          }
      },
      props: {
        type: Object,
        default: {}
      },
      methods: {
        submitSend() {
          console.log(this.sendData);
        },
        closeModel() {
          this.$emit("ceshi", this.sendData)
        }
      }
    }
</script>

<style lang="less" scoped>
  .form-box{
    ul{
      padding: 0;
      margin: 0;
      li{
        label{
          width:60px;
          display: inline-block;
        }
        list-style: none;
        margin-bottom: 10px;
        input{
          outline: none;
          border: 1px solid #ccc;
          padding: 4px;
        }
        input:focus{
          border: 1px solid blue;
        }
        select{
          width: 180px;
          padding: 3px 0;
          outline: none;
        }
      }
      .btn{
        margin-top: 30px;
        padding-left: 65px;
        input{
          width: 80px;
          height: 32px;
          border: none;
        }
        input:focus{
          border: none;
        }
        input:first-child{
          background: #8ebbff;
          color: #fff;
        }
        input:last-child{
          border: 1px solid #8ebbff;
          box-sizing: border-box;
          background: white;
          color: #8ebbff
        }
      }
    }
  }

</style>
