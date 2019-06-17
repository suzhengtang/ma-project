<template>
  <div class="demo0425">
    <Tree ref="treeRef" :data="data2" show-checkbox @on-check-change="getCheckbox"></Tree>
    <input type="text" v-model="demoVal">
    <p>{{demoWatch}}</p>
    <button @click="dataChange">点击让树的数据发生变化</button>
    <br>
    <textarea v-model="excelData" name="" id="" cols="80" rows="30" placeholder="请导入数据"></textarea>
  </div>
</template>

<script>
  import Axios from "axios";
  export default {
    name: "index",
    data() {
      return {
        demoVal: "",
        demoWatch: "",
        data2: [],
        excelData: [],
        selectData: ["专业管理", "问题任务"],
        testData: ["测试试题", "专业设置","添加"],
        message: []
      }
    },
    created() {
      this.defaultData();
    },
    methods: {
      getCheckbox(data) {
        this.selectData = data.map(m => m.title);
        console.log(this.selectData);
      },
      getData(arr, selArr) {
        var rst = [];
        for (var i = 0; i < arr.length; i++) {
          if(arr[i]){
            rst[i] = {};
            rst[i].title = arr[i].Name;
            rst[i].expand = true;
            // rst[i].checked = arr[i].Name == "专业管理" ? true : false;
            for(let j=0; j<selArr.length; j++){
              if(arr[i].Name == selArr[j]){
                rst[i].checked = true;
                rst[i].expand = true
              }
            }
            rst[i]["children"] = arr[i]["children"] ? this.getData(arr[i]["children"], selArr) : [];
          }
        }
        return rst;
      },
      dataChange(){
        this.data2 = this.getData(this.message, this.testData);
      },
      formatJson(json, options) {
          var reg = null, formatted = '', pad = 0, PADDING = '    ';
          options = options || {};
          options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
          options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
          if (typeof json !== 'string') {
             json = JSON.stringify(json);
          } else {
             json = JSON.parse(json);
             json = JSON.stringify(json);
          }
          reg = /([\{\}])/g;
          json = json.replace(reg, '\r\n$1\r\n');
          reg = /([\[\]])/g;
          json = json.replace(reg, '\r\n$1\r\n');
          reg = /(\,)/g;
          json = json.replace(reg, '$1\r\n');
          reg = /(\r\n\r\n)/g;
          json = json.replace(reg, '\r\n');
          reg = /\r\n\,/g;
          json = json.replace(reg, ',');
          if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
               reg = /\:\r\n\{/g;
               json = json.replace(reg, ':{');
               reg = /\:\r\n\[/g;
               json = json.replace(reg, ':[');
          }
          if (options.spaceAfterColon) {
               reg = /\:/g;
               json = json.replace(reg, ':');
          }
          (json.split('\r\n')).forEach(function (node, index) {
                var i = 0, indent = 0, padding = '';
               if (node.match(/\{$/) || node.match(/\[$/)) {
                    indent = 1;
               } else if (node.match(/\}/) || node.match(/\]/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
               } else {
                   indent = 0;
               }
               for (i = 0; i < pad; i++) {
                    padding += PADDING;
               }
               formatted += padding + node + '\r\n';
               pad += indent;
           });
          return formatted;
      },
      // defaultData(){
      //   let url = "/api/test/appData";
      //   this.$http.get(url).then(res => {
      //     let sendData = res.data.data;
      //     if(sendData.status == 1){
      //       this.message = sendData.dataList;
      //     }
      //   }).catch(err => {
      //     console.log(err);
      //   })
      // },
      defaultData(){
        let url = "/api/test/appData";
        let $this = this;
        Axios.get(url).then(res => {
          let sendData = res.data.data;
          if(sendData.status == 1){
            // this.message = sendData.dataList;
            $this.data2 = $this.getData(sendData.dataList, $this.selectData)
            $this.excelData = $this.formatJson(sendData.dataList);
            $this.message = sendData.dataList
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    watch: {
      demoVal(now, old){
        this.demoWatch = now;
      }
    }
  }
</script>

<style lang="less" scoped>
.demo0425{
  padding: 20px;
}
</style>
