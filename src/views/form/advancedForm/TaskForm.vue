<!--
 * @Author: your name
 * @Date: 2020-12-30 17:43:17
 * @LastEditTime: 2021-01-02 00:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\views\form\advancedForm\TaskForm.vue
-->
<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="在职期间出勤率">
          <a-input placeholder="请输入出勤率" v-decorator="[ 'attendance', {rules: [{ required: true, message: '请输入出勤率', whitespace: true}]} ]" addon-after="%" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :xl="{span: 12}" :lg="{span: 12}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="HR评价">
          <a-textarea
            v-decorator="[ 'HREvaluate', {rules: [{ required: true, message: '请输入HR评价',whitespace: true}]} ]"
            :auto-size="{ minRows: 3, maxRows: 8 }"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :xl="{span: 12}" :lg="{span: 12}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="部门主管评价">
          <a-textarea
            v-decorator="[ 'directorEvaluate', {rules: [{ required: true, message: '请输入部门主管评价',whitespace: true}]} ]"
            :auto-size="{ minRows: 3, maxRows: 8 }"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :xl="{span: 12}" :lg="{span: 12}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="重大违纪事件(选填)">
          <a-textarea
            v-decorator="[ 'principleBreach', {rules: [{ whitespace: true}]} ]"
            :auto-size="{ minRows: 2, maxRows: 8 }"
          />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
export default {
  name: 'TaskForm',
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
