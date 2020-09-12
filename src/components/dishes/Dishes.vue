<template>
    <div>
        <nav class="conNav">
            <!-- 这个标签里放的是右侧最上在的导航 -->
            <ul>
                <li><router-link to="/dishes/hotDishes">热菜</router-link></li>
                <li><router-link to="/dishes/coldDishes">凉菜</router-link></li>
                <li><router-link to="/dishes/soup">汤类</router-link></li>
                <li><router-link to="/dishes/drink">饮料</router-link></li>
                <li><router-link to="/dishes/other">其它</router-link></li>
            </ul>
		</nav>
		
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>	
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
	background: url(../../assets/images/ico_09_1.png) center no-repeat;
	background-size: 40px;
}
.conNav ul li:nth-child(1) a:hover::before,.conNav ul li:nth-child(1) a.active::before{
	background-image: url(../../assets/images/ico_09_2.png);
}
.conNav ul li:nth-child(2) a::before{
	background: url(../../assets/images/ico_06_1.png) center no-repeat;
	background-size: 40px;
}
.conNav ul li:nth-child(2) a:hover::before,.conNav ul li:nth-child(2) a.active::before{
	background-image: url(../../assets/images/ico_06_2.png);
}
.conNav ul li:nth-child(3) a::before{
	background: url(../../assets/images/ico_11_1.png) center no-repeat;
	background-size: 40px;
}
.conNav ul li:nth-child(3) a:hover::before,.conNav ul li:nth-child(3) a.active::before{
	background-image: url(../../assets/images/ico_11_2.png);
}
.conNav ul li:nth-child(4) a::before{
	background: url(../../assets/images/ico_03_1.png) center no-repeat;
	background-size: 40px;
}
.conNav ul li:nth-child(4) a:hover::before,.conNav ul li:nth-child(4) a.active::before{
	background-image: url(../../assets/images/ico_03_2.png);
}
.conNav ul li:nth-child(5) a::before{
	background: url(../../assets/images/ico_02_1.png) center no-repeat;
	background-size: 40px;
}
.conNav ul li:nth-child(5) a:hover::before,.conNav ul li:nth-child(5) a.active::before{
	background-image: url(../../assets/images/ico_02_2.png);
} 

/* box&boxList */
.box{
	background: #c6c2c1;
	padding: 30px 65px 0;
	min-height: 730px;
}
.boxList{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.boxList li{
	width: 420px;
	border-radius: 20px;
	background: #fff;
	overflow: hidden;
	margin-bottom: 30px;
	border: 2px solid #ccc7c3;
}
.boxList li:hover,.boxList li.active{
	border: 2px solid #f19903;
}
.boxList li:hover .menuName .right a,.boxList li.active .menuName .right a{
	background-image: url(../../assets/images/ico_12_2.png);
}
.menuName{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
}
.menuName .left{
	font-size: 26px;
	color: #796355;
}
.menuName .left p{
	font-size: 18px;
	color: #f39706;
}
.menuName .left p strong{
	font-size: 34px;
}
.menuName .right a{
	display: block;
	width: 60px;
	height: 60px;
	background: url(../../assets/images/ico_12_1.png) no-repeat center;
	background-size: 60px;
}
.menuName .right a:hover{
	background-image: url(../../assets/images/ico_12_2.png);
}
</style>
