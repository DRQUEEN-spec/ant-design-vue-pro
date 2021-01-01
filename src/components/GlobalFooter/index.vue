<!--
 * @Author: your name
 * @Date: 2020-12-30 17:43:16
 * @LastEditTime: 2021-01-01 20:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\components\GlobalFooter\index.vue
-->
<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="https://www.fzu.edu.cn/" target="_blank">福州大学</a>
      <a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
      <a href="https://github.com/DRQUEEN-spec/ant-design-vue-pro" target="_blank">@DRQUEEN-spec</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
