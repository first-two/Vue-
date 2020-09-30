<template>
  <div>
    <!-- 顶部滑动区域 -->
    <!-- mui中@tap和@click有同一效果仅限mui中 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a @tap="shuju(index+1)"
            :class="['mui-control-item',index===0?'mui-active':'']"
            data-wid="tab-top-subpage-1.html"
            v-for="(item,index) in leilast"
            :key="item.index">
            {{item.cat_name}}
            </a
          >
        </div>
      </div>
    </div>

  <!-- 图片展示区域 -->
    <ul class="list-img">
      <router-link tag="li" :to="'/shouye/imgxiangq/'+43986">
        <img v-lazy="list">
        <div class="title">
          {{listtit}}
        </div>
      </router-link>
   </ul>

  </div>
</template>

<script>
//引入提示语组件
import { Toast } from "mint-ui";
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  name: "tupian",
  data() {
    return {
      leilast: [],//分类数组
      list:{},//图片列表对象
      listtit:{}//图片列表对象
    };
  },
  created() {
    this.fenlei();
    this.shuju(8888);

  },
  mounted() {
    //组件渲染完成后执行该钩子函数
    //初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    fenlei() {
      this.axios.get("/categories").then((res) => {
        if (res.data.message.length!="") {
          this.leilast = res.data.message;
          
        } else {
          Toast("获取失败");
        }
      });
    },
    shuju(goods_id) {
     this.axios.get("/goods/detail?goods_id="+goods_id).then((aaa) => {
       if (aaa.data.message.length!="") {
          this.list = aaa.data.message.goods_small_logo;
          this.listtit = aaa.data.message.goods_name;
        } else {
          Toast("获取失败");
        }
      });
    }
  }

};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
}

.list-img{
  padding: 20px;
  li{
    position: relative;
    list-style: none;

    text-align: center;
    background-color: #ccc;
    box-shadow: 0 0 9px red;
    img{
      width: 100%;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .title{
      font-size: 14px;
      color: black;
      position: absolute;
      left: 0;
      bottom: 10px;
      background-color: #ccc;
      opacity:0.6
    }
  }

}
</style>
