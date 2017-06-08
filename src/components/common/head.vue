<template>
	<div class="top">
	<span class="signout" @click="signout">退出</span>
		<span class="user"><i class="icon-user"></i><strong>管理员</strong>，欢迎登录！</span>
		
	</div>
</template>

<style scoped>
	.top{
		
	}
	.user{
		float: right;
		margin-right: 10px;
	}
	/*.user .icon-user{
		background: url(../../assets/img/user.png) no-repeat;
		float: left;
	    width: 32px;
	    height: 32px;
	    margin-right: 10px;
	    margin-top: 12px;
	}*/
	.signout{
		float: right;
		width: 100px;
		text-align: center;
		border-left: 1px solid rgba(7,17,27,0.1);
		cursor: pointer;
	}
	.signout:hover{
		background: #efefef;
	}

</style>
<script>
	import util from '../../assets/js/util'
	export default{
		methods: {
			signout(){
				util.authcode = null
		        util.removeSession('authcode')
		        this.$router.push('/login')
			}
		}
	}
</script>