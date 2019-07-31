<template>
    <div id="app" class="footer-guide">
        <span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goto('/msite')">
            <i class="iconfont iconu"></i>
            <span>外卖</span>
        </span>
        <span class="guide_item" :class="{on:'/search'===$route.path}" @click="goto('/search')">
            <i class="iconfont iconsousuo"></i>
            <span>搜索</span>
        </span>
        <span class="guide_item" :class="{on: '/order'===$route.path}" @click="goto('/order')">
            <i class="iconfont icontianchongxing-"></i>
            <span>订单</span>
        </span>
        <span class="guide_item" :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
            <i class="iconfont icongeren11"></i>
            <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        goto(path){
            this.$router.replace(path)
        }

    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .footer-guide
        top-border-1px(#eeeeee)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color green
            span 
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>
