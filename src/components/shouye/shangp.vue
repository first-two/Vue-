<template>
    <div class="sd">
        <div class="shangdian">
            <div class="titimg"> 
                <img src="http://p1.img.cctvpic.com/fmspic/2017/09/25/b6d3341104f24425ac374fc09d058264-129.jpg" alt="">
                <h5>索尼爱立信，自由</h5>
            </div>
            <div class="mane">
                <span class="new">￥1000</span>
                <span class="jiu">￥5000</span>
            </div>
            <div class="xiao">
              <span class="xiao">热卖中</span>
              <span class="shen">已售：300</span>
            </div>
        </div>

        <div class="shangdian">
            <div class="titimg"> 
                <img src="http://p1.img.cctvpic.com/fmspic/2017/09/25/b6d3341104f24425ac374fc09d058264-129.jpg" alt="">
                <h5>索尼爱立信，自由索尼爱立信，自由索尼爱立信，自由索尼爱立信，自由</h5>
            </div>
            <div class="mane">
                <span class="new">￥1000</span>
                <span class="jiu">￥5000</span>
            </div>
            <div class="xiao">
              <span class="xiao">2000</span>
              <span class="shen">300</span>
            </div>
        </div>

        <div class="shangdian">
            <div class="titimg"> 
                <img src="http://p1.img.cctvpic.com/fmspic/2017/09/25/b6d3341104f24425ac374fc09d058264-129.jpg" alt="">
                <h5>索尼爱立信，自由</h5>
            </div>
            <div class="mane">
                <span class="new">￥1000</span>
                <span class="jiu">￥5000</span>
            </div>
            <div class="xiao">
              <span class="xiao">2000</span>
              <span class="shen">300</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"slhangpin",
  data(){
    return{
      
    }
  }
}
</script>

<style lang="less">
.sd{
  display: flex;
  flex-wrap: wrap;
}
  .shangdian{
    margin: 5px 1% ;
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px rgb(230, 168, 168);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{width: 100%;}
    h5{font-size: 12px;margin-left: 5px;}
    span{font-size: 12px;}
    .mane{
      background: #eee;
      justify-content: space-between;
      display: flex;
      padding: 0 10px 0 5px;
      .new{
        flex: 1;
        font-weight: bold;
        color: red;
      }
      .jiu{
        flex: 1;
        text-decoration: line-through;
      }
    }
    .xiao{
      background: #eee;
      // justify-content: space-between;
      // display: flex;
      padding: 0 10px 0 5px;
    }
  }
</style>
