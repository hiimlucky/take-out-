<template>
    <div>
        <nav class="conNav">
            <!-- 这个标签里放的是右侧最上在的导航 -->
            <ul>
                <li><router-link to="/about/intro">公司简介</router-link></li>
                <li><router-link to="/about/join">加入我们</router-link></li>
                <li><router-link to="/about/contact">联系我们</router-link></li>
            </ul>
		</nav>
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>


<style scoped>	/* 给样式分配一个作用域，只在当前的组件内生效 */
	.conNav ul{
		height: 120px;
		line-height: 120px;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}
	.conNav ul li a{
		font-size: 30px;
		color: #fff;
		display: block;
	}
	.conNav ul li a:hover,.conNav ul li a.active{
		color: #f39800;
	}
	.conNav ul li a::before{
		content: '';
		display: inline-block;
		position: relative;
		top: 10px;
		width: 40px;
		height: 40px;
		margin-right: 20px;
	}
	.conNav ul li:nth-child(1) a::before{
		background: url(../../assets/images/ico_15_1.png) center no-repeat;
		background-size: 40px;
	}
	.conNav ul li:nth-child(1) a:hover::before,.conNav ul li:nth-child(1) a.active::before{
		background-image: url(../../assets/images/ico_15_2.png);
	}
	.conNav ul li:nth-child(2) a::before{
		background: url(../../assets/images/ico_16_1.png) center no-repeat;
		background-size: 40px;
	}
	.conNav ul li:nth-child(2) a:hover::before,.conNav ul li:nth-child(2) a.active::before{
		background-image: url(../../assets/images/ico_16_2.png);
	}
	.conNav ul li:nth-child(3) a::before{
		background: url(../../assets/images/ico_17_1.png) center no-repeat;
		background-size: 40px;
	}
	.conNav ul li:nth-child(3) a:hover::before,.conNav ul li:nth-child(3) a.active::before{
		background-image: url(../../assets/images/ico_17_2.png);
	}
	.box{
		background: #c6c2c1;
		padding: 30px 65px 0;
		min-height: 725px;
	}
</style>