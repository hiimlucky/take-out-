import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import Axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.prototype.$axios=Axios;	//把axios存到Vue的原型身上是为了在其它的组件里面都可以使用

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

