<!--
 * @Author: your name
 * @Date: 2020-12-30 17:43:17
 * @LastEditTime: 2021-01-02 00:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\views\form\advancedForm\RepositoryForm.vue
-->
<template>
  <!--
  校验规则说明
  message	校验提示文案
  pattern	正则表达式校验
  required	是否为必填项
  whitespace	空格是否会被视为错误
  -->
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="员工姓名">
          <a-input
            placeholder="请输入员工姓名"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入员工姓名', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="性别">
          <a-select placeholder="请选择性别" v-decorator="[ 'sex', {rules: [{ required: true, message: '请选择性别'}]} ]">
            <a-select-option value="male">男</a-select-option>
            <a-select-option value="female">女</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="婚姻状况">
          <a-select placeholder="请选择婚姻状况" v-decorator="[ 'marital', {rules: [{ required: true, message: '请选择婚姻状况'}]} ]">
            <a-select-option value="single">未婚</a-select-option>
            <a-select-option value="married">已婚</a-select-option>
            <a-select-option value="widowed">丧偶</a-select-option>
            <a-select-option value="divorce">离异</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="出生日期">
          <a-date-picker v-decorator="[ 'birthDate', {rules: [{ required: true, message: '请选择出生日期'}]} ]" placeholder="请选择出生日期" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="政治面貌">
          <a-select placeholder="请输入政治面貌" v-decorator="[ 'political', {rules: [{ required: true, message: '请输入政治面貌'}]} ]">
            <a-select-option value="CPC">中共党员</a-select-option>
            <a-select-option value="Probationary">中共预备党员</a-select-option>
            <a-select-option value="League">共青团员</a-select-option>
            <a-select-option value="Masses">群众</a-select-option>
            <a-select-option value="Independents">无党派人士</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="身份证号">
          <a-input
            placeholder="请输入身份证号"
            v-decorator="[
              'IDNumber',
              {rules: [{ required: true, message: '请输入正确的身份证号', whitespace: true, pattern:
              /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="学历">
          <a-select placeholder="请输入学历" v-decorator="[ 'education', {rules: [{ required: true, message: '请输入学历'}]} ]">
            <a-select-option value="doctor">博士</a-select-option>
            <a-select-option value="master">硕士</a-select-option>
            <a-select-option value="undergraduate">本科</a-select-option>
            <a-select-option value="high">高中及以下</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="最高学历毕业院校">
          <a-input
            placeholder="请输入毕业院校"
            v-decorator="[
              'GraduateSchool',
              {rules: [{ required: true, message: '请输入毕业院校', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="所属部门">
          <a-input
            placeholder="请输入所属部门"
            v-decorator="[
              'department',
              {rules: [{ required: true, message: '请输入所属部门', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="职位">
          <a-input
            placeholder="请输入职位"
            v-decorator="[
              'position',
              {rules: [{ required: true, message: '请输入职位', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="薪资范畴">
          <a-select placeholder="请选择薪资范畴" v-decorator="[ 'salary', {rules: [{ required: true, message: '请选择薪资范畴'}]} ]">
            <a-select-option value="5k">小于5k</a-select-option>
            <a-select-option value="10k">5k-10k</a-select-option>
            <a-select-option value="15k">10k-15k</a-select-option>
            <a-select-option value="20k">15k-20k</a-select-option>
            <a-select-option value="25k">大于20k</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="入职日期">
          <a-date-picker v-decorator="[ 'EntryDate', {rules: [{ required: true, message: '请选择入职日期'}]} ]" placeholder="请选择入职日期"/>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="家庭住址">
          <a-input
            placeholder="请输入家庭住址"
            v-decorator="[
              'address',
              {rules: [{ required: true, message: '请输入家庭住址', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="手机号码">
          <a-input
            placeholder="请输入手机号码"
            v-decorator="[
              'phone',
              {rules: [{ required: true, message: '请输入正确的手机号码', whitespace: true, pattern: /^1[3456789]\d{9}$/}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="电子邮箱">
          <a-input
            placeholder="请输入电子邮箱"
            v-decorator="[
              'Email',
              {rules: [{ required: true, message: '请输入正确的Email', whitespace: true, pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="其他联系方式如微信/QQ(选填)">
          <a-input
            placeholder="请输入其他联系方式"
            v-decorator="[
              'QQ',
              {rules: [{ message: '请输入其他联系方式', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'RepositoryForm',
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
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
