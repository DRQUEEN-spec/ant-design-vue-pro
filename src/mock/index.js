/*
 * @Author: your name
 * @Date: 2020-12-30 17:43:17
 * @LastEditTime: 2021-01-02 15:43:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\mock\index.js
 */
import { isIE } from '@/utils/util'

// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  if (isIE()) {
    console.error('[antd-pro] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.')
  }
  // 使用同步加载依赖
  // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
  console.log('[antd-pro] mock mounting')
  const Mock = require('mockjs2')
  require('./services/auth')
  require('./services/user')
  require('./services/manage')
  require('./services/other')
  require('./services/tagCloud')
  require('./services/article')

  Mock.setup({
    timeout: 100 // setter delay time
  })
  console.log('[antd-pro] mock mounted')
}
