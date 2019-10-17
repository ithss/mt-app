<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <top-bar />
      </el-header>
      <el-main>
        <search />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopBar from '@/components/myheader/TopBar'
import Search from '@/components/main/Search'

  export default {
      name: 'MainPage',
      components: {
        TopBar,
        Search
      }
  }
</script>

<style lang="scss">
  .el-main{
    overflow: visible;
    white-space: nowrap;
  }
</style>
