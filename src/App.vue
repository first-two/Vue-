<template>
  <div id="app">
    <!-- 顶部导航栏 -->
		<mt-header fixed title="mint-ui">
			<span  slot="left" @click="goback" v-show="flag">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>
    <!-- 路由切换区 加个动画效果用transition包起来00-->
	<transition>
    	<router-view/>
	</transition>
    <!-- 底部tab -->
    <nav class="mui-bar mui-bar-tab">
			<router-link tag="a" class="mui-tab-item1" to="/shouye">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item1" to="/huiyuan">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item1" to="/gouwc">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.gitall}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item1" to="/sousuo">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>
<script>
	export default {
		data(){
			return{
				flag:false
			}
		},
		created(){
			this.flag = this.$route.path==="/shouye"?false:true; 
		},
		methods:{
			//点击后退
			goback(){
				this.$router.go(-1)
			}
		},
		watch:{
			"$route.path":function(newVal){
				if(newVal === "/shouye"){
					this.flag=false
				}else{
					this.flag=true
				}
			}
		}
	}
</script>
<style lang="less">
  #app{padding-top: 40px;overflow-x: hidden;padding-bottom: 50px;}
  .mui-bar a.router-link-active{color: #26a2ff;}

// 动画效果css
  .v-enter{
	  opacity:0;
	  transform: translateX(100%);
  }
  .v-leave-to{
	  opacity:0;
	  transform: translateX(-100%);
	  position: absolute;//防止乱抖动
  }
  .v-enter-active,
  .v-leave-active{
	  transition: all 0.5s ease;
  }

  //改类型，解决底部tab在引入导入mui的js文件后无法切换的问题，主要是由于类名mui-tab-item导致的
//改类名，解决冲突问题
	.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}



</style>
