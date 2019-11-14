<template>
  <header class="header hidden">
    <div class="header-left left">
      <img src="@images/header/logo.png" />
      <span>招商银行区块链黑名单共享平台</span>
    </div>
    <ul class="header-center left">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/data">查询</router-link>
      </li>
      <li>
        <router-link to="/blacklist">黑名单管理</router-link>
      </li>
      <li>
        <router-link to="/organization">机构成员管理</router-link>
      </li>
      <li>
        <router-link to="/user">用户管理</router-link>
      </li>
      <li>
        <router-link to="http://www.baidu.com" target_blank
          >区块浏览</router-link
        >
      </li>
    </ul>
    <ul class="header-right right">
      <li class="user">
        <span>您好,管理员!</span>
      </li>
      <li class="logout">
        <img src="@images/header/logout.png" />
        <span @click="$router.push('login')">退出</span>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.initPage();
  },
  destroyed() {}
};
</script>
<style lang="stylus" scoped>
.header
  height .6rem
  background basicColor
  padding 0 .6rem
  .header-left
    *
      vertical-align middle
    img
      wh(.42rem,.42rem)
    span
      sc(.22rem,#fff)
      margin-left .2rem
      font-weight bold
      line-height .6rem
  .header-center
    fj()
    margin-left 1.25rem
    li
      padding-bottom .06rem
      a
        display inline-block
        padding 0 .45rem
        height .56rem
        line-height .6rem
        sc(.16rem,#fff)
        &.router-link-active
          font-weight bold
          border-bottom 2px solid #fff
  .header-right
    fj()
    li
      sc(.16rem,#fff)
      span
        line-height .6rem
      &.logout
        margin-left .5rem
        cursor pointer
        *
          vertical-align middle
        img
          wh(.2rem,.2rem)
          margin-right .12rem
</style>
