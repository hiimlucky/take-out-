<template>
	<DishesList :fatherName='name'></DishesList>
</template>

<script>
	import DishesList from './DishesList'
	export default {
		data(){
			return {
				dishes:[
				
				],
				name:'其它'
			}
		},
		components:{
			DishesList
		}
	}
</script>