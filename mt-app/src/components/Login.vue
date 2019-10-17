<template>
    <div class="login">
        <!-- <router-view></router-view> -->
        <template v-if="isThis">
        <div>
            <a class="login-logo" href="http://www.meituan.com/"></a>
        </div>

        <div class="login-content">
            <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            <div class="login-action">
                <form action="">
                    <div class="login-top">
                        <div>账号登录</div>
                        <div>手机动态码登录</div>
                    </div>

                    <div class="login-number">
                        <span></span>
                        <input type="number">
                    </div>

                    <div class="login-password">
                        <span></span>
                        <input type="password" name="password" id="">
                    </div>

                    <div class="about-password">
                        <router-link exact @click.native="handleClick" tag="div" to="/login/findPassword">忘记密码</router-link>
                        <input type="submit" value="登录">
                        <span>还没有账号</span>
                        <router-link exact tag="span" to="/login/register">免费注册</router-link>
                    </div>

                    <div class="other-login-way">
                        <span>用合作网站账号登录</span>
                        <span>QQ</span>
                        <span>WEB</span>
                    </div>
                </form>
            </div>
           </div> 
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isThis: true
        }
    },
    methods: {
        handleClick() {
            this.isThis = !this.isThis;
        }
    },
}
</script>

<style lang="less">
    .login {
        height: 100%;
        width: 100%;
        .login-logo {
                margin: 0;
                float: left;
                width: 82px;
                height: 54px;
                background-position: -188px -808px;
                background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                background-repeat: no-repeat;
                background-size: initial;
                display: block;
                display: inline;
                text-indent: -9999px;
                overflow: hidden;
        }
    }
</style>