<template>
	<div>
		<nav class="conNav">
			<ul>
				<li><a href="#">管理页</a></li>
			</ul>
		</nav>
		<div class="box">
			<div class="control">
				<div class="add">
					<dl>
						<dt>添加菜品</dt>
						<dd>
							<label for="">菜名：</label>
							<input type="text" v-model="newDishes.name">
						</dd>
						<dd>
							<label for="">分类：</label>
							<input type="text" v-model="newDishes.classify">
						</dd>
						<dd>
							<label for="">单价：</label>
							<input type="text" v-model="newDishes.price">
						</dd>
						<dd>
							<label for="">图片：</label>
							<input type="text" v-model="newDishes.img">
						</dd>
					</dl>
					<button @click="addDishes">添加</button>
				</div>
				<div class="del">
					<dl>
						<dt>删除菜品</dt>
						<dd v-for="(item,index) in totalDishes">
							<span>{{item.name}}</span><a href="javascript:;" @click='del(item)'>删除</a>
						</dd>
						<!-- <dd><span>可乐鸡翅</span><a href="#">删除</a></dd>
						<dd><span>可乐鸡翅</span><a href="#">删除</a></dd> -->
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
			return {
				newDishes:{	//这个数据里放的就是从页面里拿到的提交数据
					name:'',
					classify:'',
					price:'',
					img:'',
					num:0	//这个字段代表菜品被点击了多少次，为了在订单页获取数据的时候取到这条属性
				},
				/* totalDishes:[
					{name:'可乐鸡翅',key:'-LTepXxkcvUWTbVX'},
					{name:'红烧排骨',key:'-LTepXxkcvUWTbVX'},
					{name:'糖醋里脊',key:'-LTepXxkcvUWTbVX'},
					{name:'水煮鱼',key:'-LTepXxkcvUWTbVX'} 
				]*/
			}
		},
		methods:{
			addDishes(){
				//1、添加菜品
				if(this.newDishes.name=='' || this.newDishes.classify=='' || this.newDishes.price=='' || this.newDishes.img==''){
					alert('请输入内容');
					return;
				}

				this.$axios.post('https://wd0905222024oblsbc.wilddogio.com/dishes.json',this.newDishes)
				.then(
					res=>{
						console.log(res);
						//根据添加的菜品的类别跳转到对应的页面

						/* switch(this.newDishes.classify){
							case '热菜':
								this.$router.push('/dishes/hotDishes');
								break;
							case '凉菜':
								this.$router.push('/dishes/coldDishes');
								break;
							case '汤':
								this.$router.push('/dishes/soup');
								break;
							case '饮料':
								this.$router.push('/dishes/drink');
								break;
							case '其它':
								this.$router.push('/dishes/other');
								break;
						} */

						//添加完菜品后要更新store.js当的数据，页面中的结构才能实时响应
						//res.config.data代表的就是添加的那道菜，但是它的类型是字符串，要转成一个真正的对象，才能提交过去
						this.$store.commit('addDishesData',JSON.parse(res.config.data));

						//清空输入框
						this.newDishes.name='';
						this.newDishes.classify='';
						this.newDishes.price='';
						this.newDishes.img='';
					}
				)
			},
			del(item){
				//3、实现删除功能
				//console.log(item)
				//删除的时候需要知道当前数据对应的key才能够删除
				this.$axios({
					method:'delete',
					url:'https://wd0905222024oblsbc.wilddogio.com/dishes/'+item.key+'.json'
				})
				.then(
					res=>{
						console.log(res);
						//删除后根据类型也要跳到对应的页面

						/* switch(item.classify){
							case '热菜':
								this.$router.push('/dishes/hotDishes');
								break;
							case '凉菜':
								this.$router.push('/dishes/coldDishes');
								break;
							case '汤':
								this.$router.push('/dishes/soup');
								break;
							case '饮料':
								this.$router.push('/dishes/drink');
								break;
							case '其它':
								this.$router.push('/dishes/other');
								break;
						} */

						this.$store.commit('delDishesData',item);	//把删除的数据同步到store.js中
					}
				)
				.catch(
					err=>{
						console.log(err);
					}
				);
			}
		},
		created() {
			//这个方法在页面里的实例被创建完成后触发，在这个方法里要请求数据，然后展示到页面里
			this.$axios.get('https://wd0905222024oblsbc.wilddogio.com/dishes.json')
			.then(
				res=>{
					//console.log(res);

					//数据请求成功后，需要在数据里添加一条字段(key),这是作为删除数据时候要传递的一个参数
					const keys=Object.keys(res.data);
					//console.log(keys);
					let result=[];

					for(let v of keys){
						result.push(res.data[v]);
					}
					
					//console.log(this.totalDishes);
					//把hash添加到对应的数据里
					for(let i=0;i<result.length;i++){
						result[i].key=keys[i];
					}


					//这里同样需要把数据存储一下，因为stro.js里的数据在在菜品页里获取的，如果没先点击菜品页，直接进入到这个页面的时候，是没有数据的。所以在要先把数据存储一下
					this.$store.commit('storageDishesData',result);
					//console.log(this.totalDishes);

					//console.log(this.$store.state.dishesData)
				}

				
			)
			.catch(
				err=>{
					console.log(err);
				}
			)
		},
		computed:{
			totalDishes(){
				return this.$store.getters.getDishesData;
			}
		}
	}
</script>

<style>
	dl,dd{
		margin: 0;
		padding: 0;
	}

	.box{
		background: #c6c2c1;
		padding: 30px 65px 0;
		min-height: 730px;
	}

	/* add */
	.add {
		margin-bottom: 50px;
	}
	.add dt,.del dt{
		font-size: 30px;
		color: #ba6824;
	}
	.add dd label{
		font-size: 24px;
		color: #716154;
	}
	.add dd{
		margin: 10px 0;
		padding-left: 50px;
	}
	.add dd input{
		width: 400px;
		height: 50px;
		border: 1px solid #ccc;
		font-size: 26px;
		color: #716154;
	}
	.add button{
		width: 100px;
		height: 50px;
		margin-left: 250px;
	}

	.del{
		width: 520px;
	}
	.del dd{
		font-size: 30px;
		margin: 15px 0;
		padding-left: 50px;
	}
	.del dd a{
		float: right;
		font-size: 22px;
		color: #716154;
	}
	.del dd a:hover{
		text-decoration: underline;
	}
</style>