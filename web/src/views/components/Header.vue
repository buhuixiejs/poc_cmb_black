<template>
  <header class="header">
    导航
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
  height 60px
  border 1px solid #000
</style>
