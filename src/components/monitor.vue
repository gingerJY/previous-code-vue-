<template>
	<div class="monitor">
		<el-row>
			<el-col :span="3" class='monitor_l'>
				<m-sidebar></m-sidebar>
			</el-col>
			<el-col :span="21" class='monitor_r'>
				<div class="main">
					<router-view></router-view>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped>
	.monitor_l{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
	}
	.monitor_r{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		background: #eee;
		overflow: auto;
	}
</style>

<script>
	import mSidebar from '@/components/common/sidebar'
	export default {
		components: {
	    	mSidebar,
	    },
	}
</script>