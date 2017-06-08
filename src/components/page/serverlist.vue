<template>
	<div class="serverlist">
		<h3 class="sl_title">平台</h3>
    	<ul>
    		<li class="thead">
    			<span class="platform">平台</span>
    			<span>操作系统</span>
    			<span>状态</span>
    			<span>CPU</span>
    			<span>磁盘使用率</span>
    			<span>剩余内存</span>
    		</li>
    		<li class="tbody" v-for="item in body.result">
    		<router-link to="/monitor/dashboard">
    			<span class="platform">{{item.serverName}}</span>
    			<span>win</span>
    			<span>
    			<i v-if="item.state ===0" class="status green">up</i>
    			<i v-if="item.state ===1" class="status red">down</i>
    			</span>
    			<span><el-progress :text-inside="true" :stroke-width="22" :percentage="item.cpuUsePercent"></el-progress></span>
    			<span><el-progress :text-inside="true" :stroke-width="22" :percentage="item.usedMemoryPercent"></el-progress></span>
    			<span><el-progress :text-inside="true" :stroke-width="22" :percentage="item.freeMemoryPercent"></el-progress></span>
    		</router-link>
    		</li>
    	</ul>
    	<div class="pagination">
		  <el-pagination
		    layout="->,prev, pager, next"
		    :total="body.total">
		  </el-pagination>
		</div>
	</div>
</template>

<style scoped>
	.serverlist{
		width: 96%;
		margin: 0 auto;
	}
	.sl_title{
		font-weight: normal;
		font-size: 20px;
		margin: 20px 0 26px;
	}
	.serverlist ul{
		background: #fff;
	}
	.serverlist ul li{
		list-style: none;
		border-top: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
		width: 100%;
	}
	.serverlist ul .tbody:hover{
		background: #c9e5f5;
		cursor: pointer;
	}
	.serverlist ul .thead{
		font-weight: bold;
		padding: 5px 0;
	}
	.serverlist ul li span{
		display: inline-block;
		width: 14%;
		margin-left: 1%;
	}
	.serverlist ul li .platform{
		width: 22%;
	}
	.status{
		display: inline-block;
		margin-top: 5px;
		font-style: normal;
		color: #fff;
		text-align: center;
		width: 60%;
		height: 30px;
		line-height: 30px;
		border-radius: 6px;
	}
	.red{
		background: #FF4949;
	}
	.green{
		background: #13CE66;
	}
	.pagination{
		margin-top: 20px;
	}
</style>

<script>
	export default {
	  name: 'serverlist',
	  data() {
        return {
		  "code": "0",
		  "desc": "",
		  "body": {
		    "totalPage": 1,
		    "result": [
		      {
		        "serverName": "218[My Windows Server]",
		        "updateTime": 1495791713000,
		        "serverPort": "172.16.10.218",
		        "serviceName": "CPU Load-Memory Usage",
		        "serverId": 7,
		        "output": "æ²¡æœ‰åˆ°ä¸»æœºçš„è·¯ç”±-æ²¡æœ‰åˆ°ä¸»æœºçš„è·¯ç”±",
		        "state": 1,
		        "serviceId": "15-16"
		      },
		      {
		        "cpuUsePercent": 0,
		        "serverName": "41[My Windows Server]",
		        "updateTime": 1495791753000,
		        "serverPort": "172.16.10.41",
		        "serviceName": "Memory Usage-CPU Load",
		        "freeMemoryPercent": 55,
		        "serverId": 8,
		        "output": "Memory usage: total:32743.03 Mb - used: 14613.95 Mb (45%) - free: 18129.08 Mb (55%)-CPU Load 0% (5 min average)",
		        "state": 0,
		        "usedMemoryPercent": 45,
		        "serviceId": "22-21"
		      },
		      {
		        "cpuUsePercent": 70,
		        "serverName": "92[My Windows Server]",
		        "updateTime": 1495791753000,
		        "serverPort": "183.129.161.153",
		        "serviceName": "Memory Usage-CPU Load",
		        "freeMemoryPercent": 59,
		        "serverId": 9,
		        "output": "Memory usage: total:64508.00 Mb - used: 26425.92 Mb (41%) - free: 38082.08 Mb (59%)-CPU Load 70% (5 min average)",
		        "state": 0,
		        "usedMemoryPercent": 41,
		        "serviceId": "28-27"
		      }
		    ],
		    "total": 3,
		    "limit": 10,
		    "page": 1
		  }
		}
      },
	}
</script>