<template>
    <div class="location">
        <i class="el-icon-location-information" />
        {{ city }}
        <router-link 
        class="change-city" 
        to="{path: 'changeCity'}">
        切换城市
        </router-link>
        [
        <a href="#">门头沟区</a>
        <a href="#">大厂回族自治县</a>
        <a href="#">廊坊</a>
        ]
        <router-link 
        class="login-now" 
        to="{path: 'loginNow'}">
        立即登录
        </router-link>
        <a href="#">注册</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: '北京'
        }
    }
}
</script>

<style lang="scss">
    .location {
        font-size: 12px;
        padding-left: 10vw;
        a{
            color: #999;
            text-decoration: none;
            &:hover{
                color: orange;
                
            }
        }
        .change-city{
            border: 1px solid #e5e5e5;
            color: #666;
            border-radius: 2px;
            background-color: #f4f4f4;
        }
    }
</style>