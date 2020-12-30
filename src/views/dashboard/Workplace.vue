<!--
 * @Author: your name
 * @Date: 2020-12-30 17:43:17
 * @LastEditTime: 2020-12-30 20:37:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\src\views\dashboard\Workplace.vue
-->
<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar"/>
        </div>
        <div class="content">
          <div class="content-title">
            {{ timeFix }}，{{ user.name }}
          </div>
          <div>人力资源管理 | Human Resource</div>
        </div>
      </div>
    </template>
  </page-header-wrapper>
</template>

<script>
import { timeFix } from '@/utils/util'

export default {
  name: 'Workplace',
  data () {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {}
    }
  },
  computed: {
    currentUser () {
      return {
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      }
    },
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar
  }
}
</script>

<style lang="less" scoped>
  @import "./Workplace.less";

  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;

    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;

      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }

      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }
</style>
