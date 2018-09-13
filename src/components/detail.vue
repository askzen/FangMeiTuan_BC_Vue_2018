<!-- 模板 -->
<template>
<div class="detail">
	<div class="product-part">
		<img :src="'img/item/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价:{{data.originPrice}}元</span>
		<span class="buy">立即购买</span>
	</div>
	<ul class="sales-part clearfix">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li class="sales">销量{{data.sales}}</li>
	</ul>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body">
			<ul>
				<li>
					<h3>有效日期</h3>
					<p>{{data.validateTime}}</p>
				</li>
				<li>
					<h3>使用时间</h3>
					<p>{{data.useTime}}</p>
				</li>
				<li>
					<h3>使用规则</h3>
					<p v-for="(item, index) in data.rules" :key="index">{{item}}</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
@import '../base.scss';
.detail {
	color: #333;
	.product-part {
		position: relative;
		color: #fff;
		font-size: 16px;
		img {
			width: 100%;
		}
		h1, p {
			position: absolute;
			left: 10px;
			bottom: 20px;
		}
		h1 {
			bottom: 40px;
			font-size: 24px;
		}
	}
	.price-part {
		height: 60px;
		line-height: 60px;
		background: #fff;
		padding: 0 10px;
		border-bottom: 1px solid #ccc;
		.price {
			color: $navBg;
			strong {
				font-size: 40px;
				font-weight: normal;
			}
		}
		.buy {
			color: #fff;
			background: #f30;
			padding: 8px 15px;
			float: right;
			margin-top: 10px;
			line-height: 1;
			font-size: 12px;
		}
	}
	.sales-part {
		background: #fff;
		padding: 10px 0;
		margin-bottom: 10px;
		li {
			width: 50%;
			float: left;
			color: yellowgreen;
			height: 30px;
			line-height: 30px;
			padding-left: 10px;
			box-sizing: border-box;
		}
	}
	.module {
		background: #fff;
		margin-bottom: 10px;
		padding: 10px 10px 5px 10px;
		.module-header {
			font-size: 22px;
			border-bottom: 1px solid #ccc;
			height: 50px;
			line-height: 50px;
		}
		.module-body {
			padding: 15px 0;
			line-height: 28px;
			h3 {
				line-height: 50px;
				color: #f60;
			}
		}
		.module-footer {
			border-top: 1px solid #ccc;
			height: 40px;
			line-height: 40px;
			color: skyblue;
		}
	}
}
</style>
<!-- 脚本 -->
<script type="text/javascript">
export default {
	data() {
		// 绑定数据
		return {
			data: {}
		}
	},
	// 组件创建完成，发送请求
	created() {
		this.$http.get('data/product.json', {
			// 请求的是哪一个产品
			params: {
				id: this.$route.params.detailid
			}
		})
		// 存储数据
		.then(({ data }) => {
			// 存储数据
			this.data = data;
			// console.log(this.data)
		})
	}
}
</script>