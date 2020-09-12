import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dishesData:[  //这里存储菜品的数据

		]
	},
	getters:{
		getDishesData(state){	//用来获取菜品数据
			return state.dishesData;
		}
	},
	mutations: {
		storageDishesData(state,data){	//第一个是state，第二个参数是传递过来的
			state.dishesData=data;	//把拿过来的数据存到state里
		},
		
		//更新添加的数据
		addDishesData(state,data){
			//这个data代表的是添加的那道菜的数据
			state.dishesData.push(data);
		},

		//更新删除的数据
		delDishesData(state,data){
			state.dishesData.forEach((ele,index)=>{
				if(ele.name==data.name){
					state.dishesData.splice(index,1);
				}
			});
		}
	},
	actions: {

	}
})
