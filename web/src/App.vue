<template>
  <div class="app">
    <Header v-show="showHeader"></Header>
    <router-view />
  </div>
</template>
<script>
import Header from "@/views/components/Header";
export default {
  name: "index",
  components: { Header },
  data() {
    return {
      showHeader: false
    };
  },
  methods: {
    // 根据路由判断显示隐藏导航和菜单
    judgeRouter() {
      let forbidHeader = ["/login"];

      this.showHeader = forbidHeader.includes(this.$route.fullPath)
        ? false
        : true;
    }
  },
  watch: {
    $route: "judgeRouter"
  },
  mounted() {}
};
</script>
<style lang="stylus" scope>
.app
  .container
    .top
      background #ffffff
      box-shadow 0rem .02rem .04rem 0rem rgba(37, 37, 37, 0.02)
      br(.02rem)
      .title-wrap
        margin-top .3rem
        .title-tip
          padding .15rem 0 0.1rem 0
          border-bottom 1px solid #F1F1F1
        .titlt-icon
          border-left .04rem solid #B1120D
          margin-left .2rem
        .title
          margin-left .12rem
          sc(.16rem, #444B5C)
          font-weight bold
      .search-wrap
        padding .16rem .2rem .2rem .2rem
        .search-tip
          display inline-block
          +.search-tip
            margin-left .6 rem
          .log-tip
            color #444B5C
          input
            height .4rem
            br(2px)
            border 1px solid #F1F1F1
          .search
            width 3rem
            margin-left .2rem
          .search-name
            width 2rem
            margin-left .2rem
      .search-btn
        display inline-block
        margin-left 0.2rem
        .el-button
          padding .09rem .25rem
</style>
