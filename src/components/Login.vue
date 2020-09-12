<template>
	<div class="loginBox">
		<div class="top">
			<div class="logo"></div>
			<div class="input">
				<label for="username">账号：</label>
				<input type="text" id="username" v-model="username">
			</div>
			<div class="input">
				<label for="password">密码：</label>
				<input type="text" id="password" v-model="password">
			</div>
		</div>
		<div class="btn">
			<button @click="login">登录</button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			login(){
				//alert(1);
				if(this.username=='' || this.password==''){
					alert('请输入用户名与密码');
					return;
				}

				this.$axios.get('https://wd0905222024oblsbc.wilddogio.com/users.json')
				.then(
					res=>{
						//console.log(res.data);
						//取到的数据是所有的用户名跟密码，放在了res.data里面，以下就是取到的数据
						/* {
							'-LTepXxkcvUWTbVX': {password: "123", username:"kaivon"},
							'-LTephLLoto1jWV5': {password: "321", username: "陈学辉"}
						} */

						let logined=false;	//存储是否登录成功

						const keys=Object.keys(res.data);	//把对象当中的所有key都拿出来并放到一个数组里面
						//["-LTepXxkcvUWTbVX", "-LTephLLoto1jWV5"]
						//console.log(keys);

						for(let v of keys){
							//console.log(v);
							//res.data[v]，这个是根据key去取到对应的vaule

							if(res.data[v].username==this.username && res.data[v].password==this.password){
								//这两个条件同时满足了，就代表用户名跟密码都正确
								//alert('登录成功');

								logined=true;

								this.$router.push('/home');

								break;	//当匹配成功后，后面的数据就不需要再去做匹配了，就跳出循环
								
							}else{
								logined=false;
							}
						}

						if(!logined){
							alert('用户名或者密码错误！');
						}
					}
				)
				.catch(
					err=>{
						console.log(err);
					}
				)
			}
		}
	}
</script>
<style>
   .loginBox{
		width: 600px;
		height: 520px;
		background: rgba(173,173,173,0.7);
		border-radius: 30px;
		box-shadow: 0 0 20px #403939;
		overflow: hidden;
		position: absolute;

		margin: auto;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}
	.loginBox .top div.logo{
		height: 200px;
	}
	.loginBox .top{
		text-align: center;
	}
	.loginBox .input{
		height: 60px;
		font-size: 30px;
		color: #fff;
		margin-bottom: 20px;
	}
	.loginBox .top input{
		width: 260px;
		height: 30px;
		border: none;
		border-bottom: 1px solid #fff;
		background: none;
		outline: none;
		font-size: 30px;
		color: #fff;
	}
	.loginBox .btn button{
		width: 100%;
		height: 80px;
		line-height: 80px;
		background: #f39801;
		text-align: center;
		font-size: 40px;
		color: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		border: none;
		outline: none;
		cursor: pointer;
	} 
</style>