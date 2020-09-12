<template>
    <div id="sideBar">
        <div class="logo"></div>
        <div class="user">
            <div class="login">
                <div><router-link to="/login">登录</router-link></div>
                <div><router-link to="/register">注册</router-link></div>
            </div>
            <div class="logined" style="display:none;">
                <span>kaivon</span>
            </div>
        </div>
        
        <ul class="message">
            <li>台号：<strong>101</strong></li>
            <li>人数：<strong>3</strong></li>
            <li>订单号：<strong>1003</strong></li>
        </ul>
        <ul class="sideNav">
			<!-- 指定一个跳转标签 -->
            <!-- <li><router-link tag="div" to="/home">主页</router-link></li> -->

			<!-- 用属性我代替具体的路由地址 -->
            <!-- <li><router-link :to="homeLink">主页</router-link></li> -->

			<li><router-link :to="{name:'homeLink'}">主页</router-link></li>
            <li><router-link :to="{name:'dishesLink'}">菜品</router-link></li>
            <li><router-link to="/order">订单</router-link></li>
            <li><router-link to="/manage">管理</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
    </div>
</template>

<script>
	/* export default {
		data(){
			return {
				homeLink:'/home'
			}
		}
	} */
</script>

<style>
#sideBar{
	width: 20%;
}
/* .waiter{
	width: 80%;
	margin: 0 auto;
	font-size: 18px;
	color: #fff;
	padding: 18px 0;
	border-bottom: 1px solid #372d2b;
}
.waiter img{
	width: 30px;
	vertical-align: bottom;
} */
.user{
	padding: 18px 0;
	border-bottom: 1px solid #372d2b;
}
.login{
	display: flex;
	justify-content: space-around;
}
.login div:nth-child(1)::before{
	content: '';
	display: inline-block;
	width: 30px;
	height: 30px;
	background: url(../assets/images/ico_17.png);
	background-size: 30px;
	vertical-align: middle;
	margin-right: 15px;
}
.login div:nth-child(2)::before{
	content: '';
	display: inline-block;
	width: 30px;
	height: 30px;
	background: url(../assets/images/ico_18.png);
	background-size: 30px;
	vertical-align: middle;
	margin-right: 15px;
}
.login div a{
	color: #fff;
	font-size: 24px;
	vertical-align: middle;
}
.login div a:hover{
	color: #f19903;
}
.logined{
	color: #fff;
	font-size: 24px;
	vertical-align: middle;
	padding-left: 30px;
}
.logined::before{
	content: '';
	display: inline-block;
	width: 50px;
	height: 50px;
	background: url(../assets/images/avant.jpg) no-repeat center;
	background-size: 50px;
	vertical-align: middle;
	margin-right: 15px;
	border-radius: 50%;
}

.message{
	width: 80%;
	margin: 24px auto;
}
.message li{
	height: 50px;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
}
.message li strong{
	font-size: 26px;
}

.sideNav li{
	height: 100px;
	line-height: 100px;
	text-align: center;
	border-bottom: 1px solid #3f3631;
}
.sideNav li a{
	display: block;
	width: 100%;
	height: 100px;
	font-size: 32px;
	color: #fff;
}
.sideNav li a::before{
	content: '';
	display: inline-block;
	position: relative;
	top: 12px;
	width: 50px;
	height: 50px;
	margin-right: 20px;
}
.sideNav li a:hover,.sideNav li a.active{
	background: #3f3631;
	color: #f19903;
}
.sideNav li:nth-child(1) a::before{
	background: url(../assets/images/ico_13_1.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(1) a:hover::before,.sideNav li:nth-child(1) a.active::before{
	background: url(../assets/images/ico_13_2.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(2) a::before{
	background: url(../assets/images/ico_01_1.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(2) a:hover::before,.sideNav li:nth-child(2) a.active::before{
	background: url(../assets/images/ico_01_2.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(3) a::before{
	background: url(../assets/images/ico_14_1.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(3) a:hover::before,.sideNav li:nth-child(3) a.active::before{
	background: url(../assets/images/ico_14_2.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(4) a::before{
	background: url(../assets/images/ico_04_1.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(4) a:hover::before,.sideNav li:nth-child(4) a.active::before{
	background: url(../assets/images/ico_04_2.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(5) a::before{
	background: url(../assets/images/ico_05_1.png) center no-repeat;
	background-size: 50px;
}
.sideNav li:nth-child(5) a:hover::before,.sideNav li:nth-child(5) a.active::before{
	background: url(../assets/images/ico_05_2.png) center no-repeat;
	background-size: 50px;
}
</style>
