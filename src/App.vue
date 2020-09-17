<template>
  <div id="app">
    <!-- 顶部导航栏 -->
		<mt-header fixed title="mint-ui"></mt-header>
    <!-- 路由切换区 加个动画效果用transition包起来00-->
	<transition>
    	<router-view/>
	</transition>
    <!-- 底部tab -->
    <nav class="mui-bar mui-bar-tab">
			<router-link tag="a" class="mui-tab-item" to="/shouye">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item" to="/huiyuan">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item" to="/gouwc">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">3</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link tag="a" class="mui-tab-item" to="/sousuo">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

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
</style>
