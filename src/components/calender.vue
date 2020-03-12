<template>
  <div>
    <el-card>
      <!--      输入框-->
      <el-row :gutter="10">
        <el-col :span="10">
          <el-input
            placeholder="今天要干点什么呢？"
            v-model="newInput"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="addEvent">加入日程表</el-button>
        </el-col>
      </el-row>
      <!--      tab栏-->
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部任务" name="all">
          <el-checkbox border v-for="item in list" :key="item.id" v-model="item.done" :class="item.done?'doneStyle':''">
            {{item.info}}
          </el-checkbox>
          <!--          <p v-for="item in list" :key="item.id" @click="changeSta(item)">{{item.info}}</p>-->
        </el-tab-pane>
        <el-tab-pane label="已完成" name="done">
          <el-checkbox border v-for="item in getDoneList" :key="item.id" v-model="item.done" :class="item.done?'doneStyle':''">
            {{item.info}}
          </el-checkbox>
        </el-tab-pane>
        <el-tab-pane label="未完成" name="undone">
          <el-checkbox border v-for="item in getUndoneList" :key="item.id" v-model="item.done">
            {{item.info}}
          </el-checkbox>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          info: '窗台看日出',
          done: false
        },
        {
          id: 1,
          info: '叫主人起床',
          done: true
        },
        {
          id: 2,
          info: '陪主人玩逗猫棒',
          done: true
        },
        {
          id: 3,
          info: '睡午觉',
          done: false
        }
      ],
      activeName: 'all',
      newInput: '',
      nextId: 4,
      doneList: []
    }
  },
  methods: {
    addEvent () {
      if (this.newInput.trim().length === 0) {
        return this.$message.warning('写点什么吧？')
      }
      const newEvent = {
        id: this.nextId++,
        info: this.newInput,
        done: false
      }
      this.list.push(newEvent)
      this.newInput = ''
    }
  },
  computed: {
    getDoneList () {
      const doneList = this.list.filter(x => x.done === true)
      return doneList
    },
    getUndoneList () {
      const undoneList = this.list.filter(x => x.done === false)
      return undoneList
    }
  }
}
</script>

<style lang="less" scoped>
  .el-checkbox {
    /*display: block;*/
    height: 50px;
    width: 500px;
    margin: 5px 5px 5px 0 !important;
    padding: 0;
  }

  .el-checkbox.is-bordered + .el-checkbox.is-bordered {
    margin: 0;
  }

  // 选中状态下边框颜色
  .el-checkbox.is-bordered.is-checked {
    border-color: #eee;
  }

  .is-checked[data-v-0fd35aca] {
    color: #eeeeee;
    text-decoration: line-through !important;
  }

  .doneStyle {
    color: #eeeeee;
    text-decoration: line-through !important;
  }
</style>
