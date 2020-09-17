<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media"  v-for="item in newlist" :key="item.goods_id">
					<router-link tag="a" :to="'/shouye/xiangqing/'+item.goods_id">
						<img class="mui-media-object mui-pull-left" :src="item.goods_big_logo">
						<div class="mui-media-body">
							  <h2>{{item.goods_name}}</h2>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                <span>点击了：{{item.goods_price}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			
			</ul>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
export default {
  name:"xinwen",
  data(){
    return{
      newlist:[]
    }
  },
  created(){
    this.getlunbo();
  },
  methods:{
    getlunbo(){
      this.axios.get('/goods/search?cid=5').then((res)=>{
        if(res.data.message.length!=""){
            this.newlist = res.data.message.goods;
            console.log(this.newlist)
        }else{
           Toast("获取失败")
        }
    })
    }
  }
}
</script>

<style lang="less">
 .mui-table-view{
   h2{
     font-size: 14px;
     color:#cccccc
   }
   .mui-ellipsis{
     display: flex;
     justify-content: space-between;
   }
   li span{
     color: #226aff;
     font-size: 12px;
     
   }
 }
</style>
