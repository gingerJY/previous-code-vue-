<template>
	<div class="sidebar">
		<el-menu theme='dark' router>
			<div class="logo">
				<h3>服务器监控</h3>
			</div>
			<div class="menu">
				<el-menu-item index="/monitor/serverlist"><i class="el-icon-menu"></i>服务器列表</el-menu-item>

				<el-submenu index="1">
			        <template slot="title"><i class="el-icon-star-on"></i>用户</template>
			          <el-menu-item index="1-1"  @click="signout">退出登录</el-menu-item>   
			    </el-submenu>
			</div>
		</el-menu>
	</div>
</template>

<style scoped>
	.logo{
		padding: 10px 0;
	}
	.logo h3{
		font-size: 20px;
		color: #fff;
		background: url(../../assets/img/eye.png) no-repeat left;
		height: 40px;
		line-height: 40px;
		padding-left: 40px;
	}
	.menu{
		position: fixed;
		top :58px;
        bottom :0;
        left :0;
		background: #324157;
		width: 12.5%;
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