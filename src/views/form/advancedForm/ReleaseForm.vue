<!--
 * @Author: your name
 * @Date: 2021-01-02 22:41:48
 * @LastEditTime: 2021-01-03 01:07:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\views\form\advancedForm\ReleaseForm.vue
-->
<template>
  <a-form :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="是否发布到公开人才池">
          <a-select placeholder="请选择" v-decorator="[ 'showInPublic', {rules: [{ required: true, message: '请选择'}]} ]">
            <a-select-option value="true">是(所有账号可见)</a-select-option>
            <a-select-option value="false">否(仅所属公司账号可见)</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="所属行业">
          <a-select placeholder="请选择" v-decorator="[ 'industry', {rules: [{ required: true, message: '请选择'}]} ]">
            <template v-for="(item, index) in industryGroup">
              <a-select-opt-group :label="item.title" :key="index">
                <a-select-option v-for="subItem in item.content" :key="subItem.subTitle">
                  {{ subItem.subTitle }}
                </a-select-option>
              </a-select-opt-group>
            </template>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
export default {
  name: 'ReleaseForm',
  data () {
    return {
      form: this.$form.createForm(this),
      industryGroup: [
        {
          title: '互联网/IT/通信/电子',
          content: [
            {
              subTitle: '电子/半导体/集成电路'
            },
            {
              subTitle: '电子商务'
            },
            {
              subTitle: '运营商/增值服务'
            },
            {
              subTitle: '计算机软件'
            },
            {
              subTitle: '网络/信息安全'
            },
            {
              subTitle: '云计算/大数据'
            }
          ]
        },
        {
          title: '公共管理/社会保障',
          content: [
            {
              subTitle: '社团/组织/社会保障'
            },
            {
              subTitle: '国家机构'
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
