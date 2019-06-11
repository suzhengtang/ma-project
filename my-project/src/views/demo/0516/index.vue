<template>
    <div class="demo0516">
      <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          message: "ceshi"
        }
      },
      created() {
        this.test();
        this.test1()
      },
      methods: {
        test() {    //在一个数组中抛出相同的数据（方案一）
          let arrB = ["1;111","2;222","3;333","4;444","2;222"];
          let arr = [];
          for(let i=0; i<arrB.length; i++){
            if(arr.indexOf(arrB[i]) == -1){
              arr.push(arrB[i]);
            }else {
              alert(arrB[i])
            }
          }
          console.log(arr);
        },
        test1() {     //在一个数组中抛出相同的数据（方法二）
          let arrB = ["1;111","2;222","3;333","4;444","2;222"];
          for(let i=0; i<arrB.length-1; i++){
            for(let j=i+1; j<arrB.length; j++){
              if(arrB[i] == arrB[j]){
                alert(arrB[i]);
              }
            }
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.demo0516{
  padding: 20px;
  margin: 20px;
  width: auto;
  height: 800px;
  border: 1px dashed blue;
  box-sizing: border-box;
}
</style>
