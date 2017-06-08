<template>
	<div class="dashboard">
		<h3 class="db_title">系统概览</h3>
		<el-row>
			<el-col :span="16" class="db_l">
				<div id="cpuChart" class="chartBox"></div>
				<div id="memoryChart"class="chartBox"></div>
				<el-col :span="12">
					<div id="diskChart" class="chartBox"></div>
				</el-col>
				<el-col :span="12">
					<div id="networkChart" class="chartBox"></div>
				</el-col>
			</el-col>
			<el-col :span="8" class="db_r">
				<div id="loadChart" class="chartBox"></div>
				<div id="courseTable" class="chartBox">
					<el-table :data="tableData" stripe style="width: 100%">
					    <el-table-column prop="date" label="日期" width="180"></el-table-column>
					    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
					    <el-table-column prop="address" label="地址"></el-table-column>
					</el-table>
				</div>
			</el-col>
		</el-row>
		
	</div>
	
	
</template>
<style scoped>
	.dashboard{
		width: 96%;
		margin: 0 auto;
	}
	.db_title{
		font-weight: normal;
		font-size: 20px;
		margin: 20px 0 26px;
	}
	.chartBox{
		height: 300px;
		border: 1px solid #ccc;
		background: #fff !important;
		margin-bottom: 10px;
	}
	.db_l .chartBox{
		margin-right: 10px;
	}
	#courseTable{
		height: 610px;
		overflow: auto;
	}
</style>
<script>
	import echarts from 'echarts'
	export default {
	  name: 'dashboard',
	  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    
      },
      mounted(){
      	var cpuChart = echarts.init(document.getElementById('cpuChart'));
      	var memoryChart = echarts.init(document.getElementById('memoryChart'));
      	var diskChart = echarts.init(document.getElementById('diskChart'));
      	var networkChart = echarts.init(document.getElementById('networkChart'));
      	var loadChart = echarts.init(document.getElementById('loadChart'));
      	var option = {
            title: {
                text: 'cpu使用率'
            },
            tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    grid: {
		        left: '1%',
		        right: '2%',
		        bottom: '2%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'直接访问',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name:'搜索引擎',
		            type:'line',
		            stack: '总量',
		            // label: {
		            //     normal: {
		            //         show: true,
		            //         position: 'top'
		            //     }
		            // },
		            areaStyle: {normal: {}},
		            data:[820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
        };

        var optionX = {
		    title: {
		        text: '未来一周',
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		   
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value} °C'
		        }
		    },
		    series: [
		        {
		            name:'最高气温',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		           
		        },
		        {
		            name:'最低气温',
		            type:'line',
		            data:[1, 2, 2, 5, 3, 2, 0],
		            
		           
		        }
		    ]
		};

        cpuChart.setOption(option);
        memoryChart.setOption(option);
        diskChart.setOption(optionX);
        networkChart.setOption(optionX);
        loadChart.setOption(optionX);
      }
	}
	
</script>