<!-- 模板 -->
<template>
<div class="home">
	<ul class="icons clearfix">
		<router-link v-for="(item, index) in icons" :key="index" :to="'/list/type/' + item.id" tag="li">
			<img :src="'img/icon/' + item.src" alt="">
			<span>{{item.text}}</span>
		</router-link>
	</ul>
	<!-- 广告模块 -->
	<ul class="ad clearfix">
		<router-link v-for="(item, index) in ads" :key="index" tag="li" :to="'/detail/' + item.id">
			<h3 :class="'item-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'img/ad/' + item.url" alt="">
		</router-link>
	</ul>
	<div class="home-list">
		<h2>猜你喜欢</h2>
		<ul class="items">
			<router-link v-for="(item, index) in list" :key="index" :to="'/detail/' + item.id" tag="li">
				<img :src="'img/list/' + item.img" alt="">
				<div class="content">
					<h3>{{item.title}}</h3>
					<p>
						<span class="price">{{item.price}}元</span>
						<span class="origin-price">门市价:{{item.originPrice}}元</span>
						<span class="sales">销量{{item.sales}}</span>
					</p>
				</div>
			</router-link>
		</ul>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" scoped lang="scss">
/* 引入库文件 */
@import '../base.scss';
.home {
	.icons {
		background: #fff;
		padding: 10px 0;
		margin-bottom: 10px;
		li {
			float: left;
			width: (100%/5);
			text-align: center;
			padding-bottom: 10px;
		}
		img {
			width: 60%;
			display: block;
			margin: 0 auto 5px;
		}
		span {
			font-size: 12px;
			color: #666;
		}
	}
	.ad {
		background: #fff;
		margin-bottom: 10px;
		li {
			float: left;
			width: (100%/3);
			border-right: 1px solid #ccc;
			box-sizing: border-box;
			padding: 15px 0;
			text-align: center;
			&:last-child {
				border-right: none;
			}
		}
		img {
			width: 60%;
		}
		h3 {
			font-size: 16px;
		}
		p {
			font-size: 14px;
			margin: 5px 0 8px;
		}
		.item-0 {
			color: red;
		}
		.item-1 {
			color: green;
		}
		.item-2 {
			color: purple;
		}
	}
	.home-list {
		background: #fff;
		h2 {
			padding-left: 10px;
			height: 40px;
			line-height: 40px;
			font-size: 20px;
			color: #333;
		}
		.items {
			@extend %items;
		}
	}
}
</style>
<!-- 脚本 -->
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			icons: [
				{ id: 1, text: '美食', src: '01.png' },
				{ id: 2, text: '电影', src: '02.png' },
				{ id: 3, text: '酒店', src: '03.png' },
				{ id: 4, text: '休闲', src: '04.png' },
				{ id: 5, text: '外卖', src: '05.png' },
				{ id: 6, text: 'ktv', src: '06.png' },
				{ id: 7, text: '周边游', src: '07.png' },
				{ id: 8, text: '丽人', src: '08.png' },
				{ id: 9, text: '小吃', src: '09.png' },
				{ id: 10, text: '火车票', src: '10.png' }
			],
			// 广告数据
			ads: [],
			// 商品数据
			list: []
		}
	},
	// 组件创建完成，发送异步请求
	created() {
		// 发送异步请求
		this.$http.get('data/home.json')
			// 存储数据
			.then(({ data }) => {
				// 存储数据
				this.ads = data.ad;
				this.list = data.list;
			})
	}
}
</script>