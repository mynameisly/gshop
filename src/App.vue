<template>
    <div>
        <router-view></router-view>
        <!-- $route代表的是当前路由 -->
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>


<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
    mounted() {
        this.$store.dispatch('getAddress')
        this.$store.dispatch('getUserInfo')

    },

    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        color:red
        
</style>
