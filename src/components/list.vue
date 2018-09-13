<!-- 模板 -->
<template>
<div class="list">
	<ul class="order clearfix">
		
		<li v-for="(item, index) in orders" :key="index" @click="orderList(item.id)">
			<span>{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<ul class="items">
		<router-link v-for="(item, index) in dealList" :key="index" tag="li" :to="'/detail/' + item.id">
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
	<div class="loader-more" @click="showOther" v-show="others.length">
		<span class="title">查看其它{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
@import '../base.scss';
.list {
	.order {
		li {
			float: left;
			width: (100%/4);
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			box-sizing: border-box;
			height: 30px;
			line-height: 30px;
			background: #fff;
			font-size: 12px;
			text-align: center;
			color: #666;
			&:last-child {
				border-right: none;
			}
		}
		.arrow {
			@include arrow(4px, #666, top);
			position: relative;
			top: -2px;
			left: 2px;
		}
	}
	.items {
		@extend %items;
		li:first-child {
			border-top: none;
		}
	}
	.loader-more {
		border-top: 1px solid #ccc;
		color: $navBg;
		background: #fff;
		text-align: center;
		height: 40px;
		line-height: 40px;
		.title {
			margin-right: 5px;
		}
		.arrow {
			@include arrow(8px, $navBg, top);
			position: relative;
			.white {
				position: absolute;
				border-top-color: #fff;
				left: -8px;
				top: -10px;

			}
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
			orders: [
				{ id: 'price', text: '价格排序' },
				{ id: 'sales', text: '销量排序' },
				{ id: 'evaluate', text: '好评排序' },
				{ id: 'discount', text: '优惠排序' }
			],
			// 列表数据
			list: [],
			// 剩余未显示的数据
			others: []
		}
	},
	// 动态数据绑定，计算数据属性
	computed: {
		// 过滤list数据
		dealList() {
			
			return this.list.filter(
				item => 
					item.title.indexOf(this.$store.state.search) >= 0
			)
		}
	},
	// 组件创建完成，请求数据
	created() {
		// 请求数据
		this.$http.get('data/list.json', {
			params: {
				// 哪一类的数据
				id: this.$route.params.typeid
			}
		})
			// 数据返回，要存储
			.then(({ data }) => {
				// 更新数据
				// this.list = data;
				// 存储三条数据，就可以显示三条数据了
				this.list = data.slice(0, 3);
				// 存储剩余的数据
				this.others = data.slice(3);
			})
	},
	// 定义事件
	methods: {
		showOther() {
			// 将others中的数据显示出来，就是将others合并到list
			this.list = this.list.concat(this.others);
			// 清空others
			this.others = [];
		},
		orderList(id) {
			
			this.list.sort((a, b) => {
				
				if (id === 'discount') {
					
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				}
				
				return b[id] - a[id]
			})
			// console.log(id)
		}
	}
}
</script>