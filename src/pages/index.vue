<template>
	<div class="main">
		<header>example</header>
		<ul class="nav">
			<li>
				<router-link :to="{name:'pageOne'}" class="clear">
					下拉刷新
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageTwo'}" class="clear">
					上拉加载
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageThree'}" class="clear">
					自动加载
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageFour'}" class="clear">
					刷新&自动加载
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageFive'}" class="clear">
					侧滑呼出菜单
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageSix'}" class="clear">
					刷新&自动加载&侧滑
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'pageSeven'}" class="clear">
					翻页
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'numChange'}" class="clear">
					数量加减
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'delAll'}" class="clear">
					批量删除
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'news'}" class="clear">
					news
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'delNum'}" class="clear">
					批量删除并修改数量
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'uploadimg'}" class="clear">
					上传图片
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'page8'}" class="clear">
					page8
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'vuepullto'}" class="clear">
					vuepullto
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'vuepulltoin'}" class="clear">
					vuepulltoin
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
ul.nav{
	position: relative;
	padding-top: 50px;
}
ul.nav>li{
	padding: 0 15px;
	line-height: 30px;
}
ul.nav>li>.clear{
	position: relative;
	display: block;
	color: #aaaaff;;
}
</style>