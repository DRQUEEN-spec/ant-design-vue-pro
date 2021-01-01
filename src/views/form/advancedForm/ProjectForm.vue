<!--
 * @Author: your name
 * @Date: 2021-01-01 22:43:50
 * @LastEditTime: 2021-01-01 23:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\views\form\advancedForm\ProjectForm.vue
-->
<template>
  <div>
    <a-button type="primary" @click="sendMsg" class="save">
      保存修改
    </a-button>
    <a-table :columns="columns" :dataSource="data" :pagination="false" :loading="memberLoading">
      <template v-for="(col, i) in ['duties', 'content', 'start', 'end']" :slot="col" slot-scope="text, record">
        <a-input
          :key="col"
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          :placeholder="columns[i].title"
          @change="e => handleChange(e.target.value, record.key, col)" />
        <template v-else>{{ text }}</template>
      </template>
      <template slot="operation" slot-scope="text, record">
        <template v-if="record.editable">
          <span v-if="record.isNew">
            <a @click="saveRow(record)">添加</a>
            <a-divider type="vertical" />
            <a-popconfirm title="是否要删除本条数据？" @confirm="remove(record.key)">
              <a>删除</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="saveRow(record)">保存</a>
            <a-divider type="vertical" />
            <a @click="cancel(record.key)">取消</a>
          </span>
        </template>
        <span v-else>
          <a @click="toggle(record.key)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="是否要删除本条数据？" @confirm="remove(record.key)">
            <a>删除</a>
          </a-popconfirm>
        </span>
      </template>
    </a-table>
    <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">
      新增经历</a-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        memberLoading: false,
        columns: [
          {
            title: '担任职务',
            dataIndex: 'duties',
            key: 'duties',
            width: '20%',
            scopedSlots: { customRender: 'duties' }
          },
          {
            title: '工作内容',
            dataIndex: 'content',
            key: 'content',
            width: '20%',
            scopedSlots: { customRender: 'content' }
          },
          {
            title: '起始时间',
            dataIndex: 'start',
            key: 'start',
            width: '20%',
            scopedSlots: { customRender: 'start' }
          },
          {
            title: '终止时间',
            dataIndex: 'end',
            key: 'end',
            width: '20%',
            scopedSlots: { customRender: 'end' }
          },
          {
            title: '操作',
            key: 'action',
            scopedSlots: { customRender: 'operation' }
          }
        ],
        data: []
      }
    },
    methods: {
      sendMsg () {
        // func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
        this.$emit('func', this.data)
      },
      newMember () {
        const length = this.data.length
        this.data.push({
          key: length === 0 ? '1' : (parseInt(this.data[length - 1].key) + 1).toString(),
          duties: '',
          content: '',
          start: '',
          end: '',
          editable: true,
          isNew: true
        })
      },
      remove (key) {
        const newData = this.data.filter(item => item.key !== key)
        this.data = newData
      },
      saveRow (record) {
        this.memberLoading = true
        const { key, duties, content, start, end } = record
        if (!duties || !content || !start || !end) {
          this.memberLoading = false
          this.$message.error('请填写完整信息')
          return
        }
        const target = this.data.find(item => item.key === key)
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      },
      toggle (key) {
        const target = this.data.find(item => item.key === key)
        target._originalData = { ...target }
        target.editable = !target.editable
      },
      getRowByKey (key, newData) {
        const data = this.data
        return (newData || data).find(item => item.key === key)
      },
      cancel (key) {
        const target = this.data.find(item => item.key === key)
        Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
        target._originalData = undefined
      },
      handleChange (value, key, column) {
        const newData = [...this.data]
        const target = newData.find(item => key === item.key)
        if (target) {
          target[column] = value
          this.data = newData
        }
      }
    }
  }
</script>
<style scoped>
  .save{
    margin-bottom: 20px;
  }
</style>
