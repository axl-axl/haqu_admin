import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
	{
		path:'/',
		name:'index',
		components:{
			default:require('../components/recommend.vue'),
		}
	},
	{
		path:'/hello',
		name:'hello',
		components:{
			default:require("../components/hello.vue"),
		}
	}
]
const router = new VueRouter({
	mode:'hash',
	routes,
});

export {router};