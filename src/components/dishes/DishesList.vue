<template>
	<ul class="boxList">
		<li v-for="(item, index) in dishes">
			<img :src="item.img" alt="">
			<div class="menuName">
				<div class="left">
					<span>{{item.name}}</span>
					<p>RMB<strong>{{item.price}}/份</strong></p>
				</div>
				<div class="right">
					<a href="javascript:;" @click="order(item)"></a>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		props:['fatherName'],
		methods:{
			order(item){
				//alert(1);
				//console.log(item);	//item对应的就是点击的那个菜

				/* item.num++;
				this.$axios({
					method:'post',
					url:'https://wd0905222024oblsbc.wilddogio.com/order.json',
					data:item
				})
				.then(
					res=>{
						console.log(res);
					}
				)
				.catch(
					err=>{
						console.log(err);
					}
				); */


				//在点击的时候先去请求一下数据
				this.$axios({
					method:'get',
					url:'https://wd0905222024oblsbc.wilddogio.com/order.json'
				})
				.then(
					res=>{
						//console.log(res);

						//拿到所有的数据后，去匹配一下当前点击的那个菜，如要有，那就更新，如果没有那就增加
						let click=false,	//存储的是否点击
							hash='',		//存储点击过菜对应的hash（用于更新）
							num=0;			//存储点击的次数（用于更新）

						if(res.data){
							/* 
								1、如果res.data的值为null，表示现在是初次打开页面，并没有点过菜。要做的就是增加数据
								2、如果res.data的值不为null
									1、点击了一个新菜，需要增加数据
									2、点击了一个点过的菜，需要更新数据
							 */


							const keys=Object.keys(res.data);

							for(let v of keys){
								if(res.data[v].name===item.name){
									//这个条件是拿点击的菜与请求过来数据里的菜做对比
									click=true;
									hash=v;
									num=res.data[v].num;

									break;	//当找到了以后，后面的循环就不需要走了
								}else{
									//这个条件成立说明这个菜没有被点过
									click=false;
								}
							}

						}
						//这里return出去的目的是，可以在下面再使用.then，同时下面的then里面可以使用return的数据
						return {
							click,
							hash,
							num
						}
						
					}
				)
				.then(
					res=>{
						//如果这里的res.click为true就代表这个菜被点击过，要做的事情是更新数据
						//如果这里的res.click为false就代表这个菜没被点击过，要做的事情是增加数据
						//console.log(res);

						if(res.click){
							//这个条件成立说明现在要做的事情是更新
							item.num=++res.num;	//这里要同时让item的num与res.num都增加。++放在前面，这里代表res.num+个1，然后并把res.num+个1的结果赋给item.num

							this.$axios({
								method:'put',
								url:'https://wd0905222024oblsbc.wilddogio.com/order/'+res.hash+'.json',
								data:item
							});
						}else{
							//这个条件成立说明现在要做的事情是增加
							item.num++;
							this.$axios({
								method:'post',
								url:'https://wd0905222024oblsbc.wilddogio.com/order.json',
								data:item
							});
						}
					}	
				)
				.catch(
					err=>{
						console.log(err);
					}
				);
			}
		},
		computed:{
			dishes(){
				return this.$store.getters.getDishesData.filter(ele=>{
					return ele.classify==this.fatherName;
				});
			}
		},
		created() {
			this.$axios.get('https://wd0905222024oblsbc.wilddogio.com/dishes.json')
			.then(
				res=>{
					const keys=Object.keys(res.data);

					let result=[];	//这里存放请求过来的所有数据

					/* for(let v of keys){
						if(res.data[v].classify==this.fatherName){
							this.dishes.push(res.data[v]);
						}
					} */

					for(let v of keys){
						result.push(res.data[v]);
					}

					this.$store.commit('storageDishesData',result);	//通过触发自定义事件，把数据做为参数传递过来，mutations里的方法就能接收到了

					//console.log(result);


				}
			)
			.catch(
				err=>{
					console.log(err);
				}
			);
		},

	}
</script>
