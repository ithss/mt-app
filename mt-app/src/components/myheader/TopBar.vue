<template>
    <el-row class="topbar">
          <el-col :span="12">
              <position-bar />
          </el-col>
          <el-col :span="12">
              <function-bar class="right" />
          </el-col>
    </el-row>
</template>

<script>
import PositionBar from '@/components/myheader/PositionBar'
import FunctionBar from '@/components/myheader/FunctionBar'

  export default {
      name: 'TopBar',
      components: {
        PositionBar,
        FunctionBar
      }
  }
</script>

<style lang="scss">
    .topbar{
        min-width: 1000px;
        a{
            color: #999;
        }
        background-color: #f8f8f8;
    }
</style>