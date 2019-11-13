<template>
  <div id="app">
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
<style lang="stylus"></style>
