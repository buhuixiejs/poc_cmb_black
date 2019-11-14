<template>
  <div class="container blacklist">
    <!-- 查询 -->
    <div class="top">
      <div class="title-wrap">
        <p class="title-tip">
          <i class="titlt-icon"></i>
          <span class="title">筛选查询</span>
        </p>
      </div>
      <div class="search-wrap">
        <div class="search-tip">
          <span class="log-tip">证件号码</span>
          <el-input
            class="search"
            placeholder="请输入证件号码"
            v-model="blackSearch.num"
          ></el-input>
        </div>
        <div class="search-tip">
          <span class="log-tip">客户姓名</span>
          <el-input
            class="search-name"
            placeholder="请输入客户姓名"
            v-model="blackSearch.num"
          ></el-input>
        </div>
        <div class="search-tip">
          <span class="log-tip">手机号码</span>
          <el-input
            class="search-name"
            placeholder="请输入手机号码"
            v-model="blackSearch.num"
          ></el-input>
        </div>
        <div class="search-btn">
          <el-button type="primary">查 询</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blacklist",
  components: {},
  data() {
    return {
      blackSearch: {
        num: ""
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped></style>
