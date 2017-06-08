import Vue from 'vue'
import Router from 'vue-router'
import monitor from '@/components/monitor'
import serverlist from '@/components/page/serverlist'
import dashboard from '@/components/page/dashboard'
import login from '@/components/common/login'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	{
  		path: '/', 
  		redirect: '/login'
  	},
  	{
  		path: '/login', 
  		component: login
  	},
    {
      path: '/monitor',
      name: 'monitor',
      component: monitor,
      children:[
  		{
  			path: 'serverlist',
		    name: 'serverlist',
		    component: serverlist,
  		},
  		{
	   	  path: 'dashboard',
	      name: 'dashboard',
	      component: dashboard,
	    },
      ]
    },
    
  ]
})
