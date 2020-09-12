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
				name:'饮料'
			}
		},
		components:{
			DishesList
		}
	}
</script>