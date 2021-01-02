<template>
  <page-header-wrapper
    content="还在忍受纸质化档案的低效管理方式？还在担心档案意外丢失？小微企业跨组织人才管理系统提供电子档案一站式托管服务，云端多副本存储，永不丢失。"
  >
    <template v-slot:extraContent>
      <div style="width: 155px; margin-top: -20px;"><img style="width: 100%" :src="extraImage" /></div>
    </template>
    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template v-if="!item || item.id === undefined">
          <a-button class="new-btn" type="dashed" @click="newForm()">
            <a-icon type="plus"/>
            新增人才档案
          </a-button>
        </template>
        <template v-else>
          <a-card :hoverable="true">
            <a-card-meta>
              <a slot="title">{{ item.title }}</a>
              <a-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large"/>
              <div class="meta-content" slot="description">
                <a-table :columns="columns" :data-source="data" :pagination="false">
                  <template #name="{text}">
                    <a>{{ text }}</a>
                  </template>
                </a-table>
              </div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a @click="formDetail(item)">查看详情</a>
              <a @click="alterForm(item)">修改</a>
              <a-popconfirm
                title="确定要删除这份人才档案吗?"
                ok-text="确定"
                cancel-text="取消"
                @confirm="confirm"
              >
                <a @click="deleteForm(item)">删除</a>
              </a-popconfirm>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </page-header-wrapper>
</template>

<script>
const columns = [
  {
    title: '部门',
    dataIndex: 'depart',
    key: 'depart',
    slots: { customRender: 'name' }
  },
  {
    title: '职务',
    dataIndex: 'duty',
    key: 'duty'
  },
  {
    title: '学历',
    dataIndex: 'education',
    key: 'education'
  }
]
const data = [
  {
    key: '1',
    depart: '人资',
    duty: '主管',
    education: '本科'
  }
]

const dataSource = []
const avatarArr = ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1051452078,2851059078&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517417813,2367413112&fm=26&gp=0.jpg', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftupian.qqjay.com%2Ftou2%2F2019%2F0912%2F2309a84b752e24eaf296e1847eac3475.jpg&refer=http%3A%2F%2Ftupian.qqjay.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612180214&t=96894dd2fe86224b9a5badb2f028963c', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2408841036,899037542&fm=26&gp=0.jpg']
dataSource.push({})
for (let i = 0; i < 11; i++) {
  const ava = avatarArr[Math.floor(Math.random() * 4)]
  dataSource.push({
    id: i,
    title: `员工${i + 1}`,
    avatar: ava,
    content: '每一份托付都被认真对待，每一份档案都经严格审核，确保上传信息准确无误，保证数据真实性，为档案信息做好权威认证。'
  })
}

export default {
  name: 'CardList',
  data () {
    return {
      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource,
      data,
      columns
    }
  },
  methods: {
    newForm () {
      this.$router.push({ path: '/TalentFiles/newForm' })
    },
    deleteForm (id) {
      console.log(id)
    },
    confirm () {
      this.$message.success('删除成功')
    },
    alterForm (id) {
      console.log(id)
    },
    formDetail (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/components/index.less";

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title>a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      &>a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0,0,0,.85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 64px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }

</style>
