<template>
    <div class="demo0611">
      <h1>{{message}}</h1>
      <br>
      <h3>{{title1}}</h3>
      <p>{{content1}}</p>
      <br>
      <h3>{{title2}}</h3>
      <p>{{content2}}</p>
      <br>
      查看结果需要打开控制台
      <div class="ceshi">
          <div class="fl-left">
              <label for="">姓名：</label>
              <input type="text" placeholder="请输入你的姓名">
          </div>
          <div class="fl-left">
              <label for="">时间：</label>
              <input type="text" placeholder="请输入开始时间">
              <label for="">to</label>
              <input type="text" placeholder="请输入结束时间">
          </div>
          <div class="fl-left">
              <label for="">时间：</label>
              <input type="text" placeholder="请输入开始时间">
              <label for="">to</label>
              <input type="text" placeholder="请输入结束时间">
          </div>
          <div class="fl-left">
              <label for="">时间：</label>
              <input type="text" placeholder="请输入开始时间">
              <label for="">to</label>
              <input type="text" placeholder="请输入结束时间">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
          return {
            message: "字符串转json  以及  json转字符串",
            title1: "字符串转json   ",
            title2: "json转字符串   ",
            content1: "'a=1&b=2&c=3' => {a:1,b:2,c:3}",
            content2: "{a:1,b:2,c:3} => 'a=1&b=2&c=3'"
          }
      },
      created() {
        this.test();
        this.test1();
        this.test2();
      },
      methods: {
          test() { //方法一
            let str = "a=1&b=2&c=3";
            let obj = {};
            let strArr = str.split("&");
            for(let i=0; i<strArr.length; i++){
              obj[strArr[i].split("=")[0]] = Number(strArr[i].split("=")[1])
            }
            console.log(obj);
          },
        test2() {  //方法二
          let str = "a=1&b=2&c=3";
          let obj = {};
          let strArr = str.split("&");
          for(let i=0; i<strArr.length; i++){
            obj[strArr[i].split("=")[0]] = ~~strArr[i].split("=")[1]
          }
          console.log(obj);
        },
        test1() {
            let obj = {a: 1, b: 2, c: 3};
            let str = "";
            for(let item in obj){
              str += item+"="+obj[item]+"&";
            }
            str = str.substring(0, str.length-1);
            console.log(str);
        }
      }
    }
</script>

<style lang="less" scoped>
.demo0611{
  padding: 20px;
  .ceshi{
      width: 100%;
      height: 400px;
      border: 1px dashed red;
      margin-top: 50px;
      padding: 10px;
      .fl-left{
          width: 50%;
          float: left;
          margin-top: 10px;
      }
      input{
        height: 34px;
        vertical-align: middle
        // 让文字和input框对其使用以上两种样式即可；
      }
  }
}
</style>
