<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <mt-header fixed title="mint-ui"></mt-header>
    <!-- 路由切换区 -->
    <router-view/>
    <!-- 底部tab -->
    <nav class="mui-bar mui-bar-tab">
			<router-link tag="a" class="mui-tab-item" to="/home">
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
  #app{padding-top: 40px;}
  .mui-bar a.router-link-active{color: #26a2ff;}
</style>
