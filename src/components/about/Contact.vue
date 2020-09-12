<template>
    <!-- <div class="contact">
        <h2>联系我们</h2>
        <h3>微信</h3>
        <p>kaivon</p>
        <h3>QQ</h3>
        <p>356985332</p>
        <h3>邮箱</h3>
        <p>kaivon@qq.com</p>
    </div> -->
    <div>
        <div class="contact">
            <h2>联系我们</h2>
            <router-link tag="h3" to="/about/contact/wechat">微信</router-link>
            <router-link tag="h3" to="/about/contact/qq">QQ</router-link>
            <router-link tag="h3" to="/about/contact/email">邮箱</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
