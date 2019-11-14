<template>
  <div class="login">
    <div class="aaa">px</div>
    <div class="bbb">rem</div>
    <router-link to="/home">登录</router-link>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.login
  .aaa
    wh(200px,200px)
    border 1px solid #000
    font-size 40px
  .bbb
    width 2rem
    height 2rem
    border 1px solid red
    font-size .4rem
</style>
