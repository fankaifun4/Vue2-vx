<template>
    <section class="main-container" >
        <vh-header/>
        <transition name='list-body' mode="out-in">
            <router-view/>
        </transition >
        <vhfooter-route-nav  @changePath="changePath" :states='selectNav' />
    </section>
</template>
<script>
    import vhHeader from '@/components/homeHeader'
    import vhfooterRouteNav from '@/components/footer-route-nav'
    export default {
        name:'pageHome',
        data(){
            return {
                linkChange:'linkChange',
                selectNav:this.$store.state.navSelect
            }
        },
        components:{
            vhHeader,
            vhfooterRouteNav
        },
        methods:{
            changePath(url,states){
                this.$store.dispatch('changeNav',states)
                this.$router.push(url)
            }
        }
    }
</script>
<style scoped>
    .main-container{
        height: 100%;
        box-sizing: border-box;
    }
    
    .list-body-enter-active,.list-body-leave-active{
        will-change: transform;
        transition: opacity .5s;
    }
    .list-body-enter,.list-body-leave{
        opacity: 0;
    }
</style>

