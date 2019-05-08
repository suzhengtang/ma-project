<template>
  <div class="demo0425">
    <Tree ref="treeRef" :data="data2" show-checkbox @on-check-change="getCheckbox"></Tree>
    <input type="text" v-model="demoVal">
    <p>{{demoWatch}}</p>
    <button @click="dataChange">点击让树的数据发生变化</button>
    <br>
    <textarea v-model="excelData" name="" id="" cols="60" rows="10" placeholder="请导入数据"></textarea>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        demoVal: "",
        demoWatch: "",
        data2: [],
        excelData: "",
        selectData: ["专业管理", "问题任务"],
        testData: ["测试试题", "专业设置","添加"],
        message: [
          { 'Id': '2',
            'Name': '管理',
            'Pid': '1',
            'id': '0',
            'children': [
              {
                'Id': '1',
                'Name': '教学素材管理',
                'Pid': '0',
                'id': '659354849B9A44AA9E2477223DF68C96',
                'children': [
                  {
                    'Id': '4DDA93E00CD34E4D812EC1A9E10AA883',
                    'Name': '教学素材',
                    'Pid': '659354849B9A44AA9E2477223DF68C96',
                    'id': '4DDA93E00CD34E4D812EC1A9E10AA883',
                    'children': [
                      {
                        'Id': '6CD3A04CFBC1419F81E1A66BDC81F177',
                        'Name': '修改',
                        'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
                        'id': '6CD3A04CFBC1419F81E1A66BDC81F177'
                      },
                      {
                        'Id': 'B93352644544420782337BC41C0534A9',
                        'Name': '添加',
                        'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
                        'id': 'B93352644544420782337BC41C0534A9'
                      }
                    ]
                  },
                  {
                    'Id': '68F89C4E368048E699F3D7EDD69A86A7',
                    'Name': '测试试题',
                    'Pid': '659354849B9A44AA9E2477223DF68C96',
                    'id': '68F89C4E368048E699F3D7EDD69A86A7'
                  },
                  {
                    'Id': 'CF31D0CA5BC34765A61909B296E470C6',
                    'Name': '问题任务',
                    'Pid': '659354849B9A44AA9E2477223DF68C96',
                    'id': 'CF31D0CA5BC34765A61909B296E470C6'
                  }
                ]
              },
              {
                'Id': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                'Name': '基础数据管理',
                'Pid': '0',
                'id': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                'children': [
                  {
                    'Id': '134D7E54B9D041539940D29E24592DF4',
                    'Name': '专业设置',
                    'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                    'id': '134D7E54B9D041539940D29E24592DF4'
                  },
                  {
                    'Id': '2314DE1399484596A7440326E07590DB',
                    'Name': '专业管理',
                    'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                    'id': '2314DE1399484596A7440326E07590DB'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    created() {
      this.data2 = this.getData(this.message, this.selectData);
      this.excelData = this.formatJson(this.message)
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
