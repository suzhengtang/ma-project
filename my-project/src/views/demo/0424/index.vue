<template>
    <div class="demo">
      <Button type="primary" class="demo-add">新 增</Button>
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
          return {
            columns1: [
              {
                type: 'selection',
                width: 60,
                align: 'center'
              },
              {
                title: 'Action',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    }, 'View'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, 'Delete')
                  ]);
                }
              },
              {
                title: 'Name',
                key: 'name'
              },
              {
                title: 'Age',
                key: 'age'
              },
              {
                title: 'Address',
                key: 'address'
              }
            ],
            data1: [
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
              },
              {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
              },
              {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
              },
              {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
              }
            ]
          }
      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
          })
        },
        remove (index) {
          this.data1.splice(index, 1);
        }
      }
    }
</script>

<style lang="less" scoped>
.demo{
  width: 100%;
  height: 100%;
  padding: 20px;
  .demo-add{
    margin-bottom: 10px;
  }
}
</style>
