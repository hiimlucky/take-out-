<template>
    <div>
        <h2>这是首页</h2>
        <button @click="back">回退</button>
        <button @click="goTo">跳转到</button>
    </div>
</template>
<script>
    export default{
        methods:{
            back(){
                this.$router.go(-1);    //跳转到上一次打开的页面
            },
            goTo(){
                //this.$router.replace('/manage');
                //this.$router.replace({name:'dishesLink'});
                //this.$router.push('/order');
                this.$router.push({name:'dishesLink'});
            }
        }
    }
</script>