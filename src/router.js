import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //使用一下路由组件

//引入一级路由
import Home from './components/Home'
import Dishes from './components/dishes/Dishes'
import Order from './components/Order'
import Manage from './components/Manage'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'


//引入二级路由
import Intro from './components/about/Intro'
import Join from './components/about/Join'
import Contact from './components/about/Contact'


import HotDishes from './components/dishes/HotDishes'
import ColdDishes from './components/dishes/ColdDishes'
import Soup from './components/dishes/Soup'
import Drink from './components/dishes/Drink'
import Other from './components/dishes/Other'


//引入三级路由
import Wechat from './components/about/contact/Wechat'
import QQ from './components/about/contact/QQ'
import Email from './components/about/contact/Email'

export default new Router({
	mode:'history',
	linkActiveClass:'active',
	routes:[
		//{path:'/home',component:Home},
		{path:'/home',name:'homeLink',component:Home},

		//{path:'/dishes',component:Dishes},
		{
			path:'/dishes',
			name:'dishesLink',
			component:Dishes,
			redirect:'/dishes/hotDishes',
			children:[
				{path:'/dishes/hotDishes',component:HotDishes},
				{path:'/dishes/coldDishes',component:ColdDishes},
				{path:'/dishes/soup',component:Soup},
				{path:'/dishes/drink',component:Drink},
				{path:'/dishes/other',component:Other},
			]
		},

		{path:'/dishes',component:Dishes},
		{path:'/order',component:Order},
		{
			path:'/manage',
			component:Manage,
			//路由独享的守卫
			/* beforeEnter(to,from,next){
				alert('非登录状态下无法管理，请登录');
				next('/login');
			} */
		},

		{path:'/login',component:Login},
		{path:'/register',component:Register},


		//配置二级路由
		{
			path:'/about',
			component:About,
			redirect:'/about/intro',	//在这个路由进去后，默认显示一个选项
			children:[	//这是二级路由
				{path:'/about/intro',component:Intro},
				{path:'/about/join',component:Join},
				{
					path:'/about/contact',
					component:Contact,
					redirect:'/about/contact/wechat',	//在这个路由进去后，默认显示一个选项
					children:[
						{path:'/about/contact/wechat',component:Wechat},
						{path:'/about/contact/qq',component:QQ},
						{path:'/about/contact/email',component:Email},
					]
				},
			]
		},

		{path:'*',redirect:'/home'}	//这个路由是当用户输入一个错误的地址后跳转的页面
	]
})