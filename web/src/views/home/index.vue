<template>
  <div class="home">
    <!-- 数据概览 -->
    <div class="overview">
      <h2 class="title">数据总览</h2>
      <div class="overview-content">
        <div class="overview-item">
          <!-- 积分 -->
          <p class="credit">
            当前积分池剩余积分:
            <span>{{ 12000 | toThousand(0) }}</span>
          </p>
          <div class="msg">
            <div class="msg-item">
              <div class="msg-item-content">
                <img src="@images/home/yellow.png" alt />
                <h2>{{ 1647 | toThousand(0) }}</h2>
                <p>当前区块高度</p>
              </div>
              <p class="msg-item-footer"></p>
            </div>
            <div class="msg-item">
              <div class="msg-item-content">
                <img src="@images/home/red.png" alt />
                <h2>{{ 1244 | toThousand(0) }}</h2>
                <p>当前共查询次数</p>
              </div>
              <p class="msg-item-footer"></p>
            </div>
          </div>
        </div>
        <div class="overview-item">
          <h2 class="chart-title">联盟机构成员数量</h2>
        </div>
        <div class="overview-item">
          <h2 class="chart-title">黑名单共享数量</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.home
  padding 0 .6rem 1.35rem
  .title
    border-left 4px solid basicColor
    sc(.16rem,#444B5C)
    line-height .2rem
    padding-left .12rem
    margin .33rem 0 .14rem
  .chart-title
    sc(.16rem,#444B5C)
    border-bottom 1px solid #ECECEC
    padding .16rem .3rem .06rem
  .overview
    .overview-content
      fj()
      .overview-item
        background #fff
        &:first-child
          width 7.2rem
          margin-right .1rem
          padding .18rem .3rem
          .credit
            font-weight bold
            sc(.18rem,#444B5C)
            span
              sc(.26rem,basicColor)
              font-weight bold
          .msg
            fj()
            margin-top .3rem
            .msg-item
              width calc(50% - .1rem)
              border 1px solid #ECECEC
              // 当前区块高度
              &:first-child
                margin-right .2rem
                .msg-item-content
                  h2
                    color #E09C3B
                .msg-item-footer
                  bis('~@images/home/yellow-foot.png')
              // 当前查询次数
              &:last-child
                .msg-item-content
                  h2
                    color basicColor
                .msg-item-footer
                  bis('~@images/home/red-foot.png')
              .msg-item-content
                padding .36rem 1.02rem 0
                text-align center
                img
                  wh(100%,.46rem)
                h2
                  margin-top .16rem
                  font-size .3rem
                p
                  sc(.14rem,#999)
              .msg-item-footer
                height .26rem
        &:nth-child(2)
          width 5.3rem
          margin-right .1rem
        &:last-child
          width 5.3rem
</style>
