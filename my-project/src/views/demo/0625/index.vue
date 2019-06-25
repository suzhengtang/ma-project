<template>
    <div class="demo0625">
        <h1>{{title}}</h1>
        <button @click="postExcelFile({name: 'szt',age: 23},'www.baidu.com')"> {{export1}} </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "post请求导出文件方法",
            export1: "导出"
        }
    },
    methods: {
        postExcelFile(params, url) {
            var form = document.createElement("form");
            form.style.display = 'none';
            form.action = url;
            form.method = "post";
            document.body.appendChild(form);
        
            for(var key in params){
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
            }
        
            form.submit();
            form.remove();
        },
    }
}
</script>

<style lang="less" scoped>
.demo0625{
    padding: 20px;
    button{
        padding: 8px 20px;
        color: #fff;
        background-color: blue;
    }
}
</style>

