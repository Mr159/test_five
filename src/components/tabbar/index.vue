<template>
    <div class="g-tabbar">
        <router-link class="g-tabbar-item" to="/home">
            <i class="iconfont iconhome"></i>
            <span>首页</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/category">
            <i class="iconfont iconfenlei"></i>
            <span>分类页</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/cart">
            <i class="iconfont iconxinxi"></i>
            <span>购物车</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/personal">
            <i class="iconfont iconwode"></i>
            <span>个人中心</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Tabbar"
}
</script>

<style lang="scss" scoped>
    .g-tabbar{
        display:flex;
        width:100%;
        height:50px;
        background:#fff;

        &-item{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color:#333;
            font-size:12px;

            .iconfont{
                margin-bottom:4px;
                font-size:30px;
            }
        }

    }
    a{
        text-decoration: none;
    }
    .router-link-active{
        color:red;
    }
</style>