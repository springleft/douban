<template>
	<div class="banner">
		<div class="banner_bg">
		 	<img src="../assets/promotion_bg.jpg" alt="cover">
		 </div>
		<div class="content">
		  <div class="content-left">
	        <span class="title">用APP打开</span></br>
	        <span>{{title}}</span>
	      </div>
	        <div class="content-right">
	          <a class="down" href="https://www.douban.com/doubanapp/app?model=B&copy=1&page=movie&channel=card_movie&direct_dl=1">极速下载</a>
	          <a class="open" href="https://www.douban.com/doubanapp/card/get_app?from=mdouban&client_uri=douban%3A%2F%2Fdouban.com%2Fmovie%2F20451290&model=B&copy=1&page=movie&channel=card_movie">打开</a>
	        </div>
      	</div>
	</div>
</template>
<script>
	export default{
		name:'banner',
		props:['title'],
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
.banner{
    margin-bottom: 0;
    max-width: 100%;
    overflow: hidden;
    text-align: left;
    position: relative;
    
}
.banner_bg{
	font-size: 0;
    padding-bottom: 21.33333%;
    position: relative;


}
.banner_bg img{
	width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.content{
	position: absolute;
    left: 18px;
    top: 30%;
    bottom: 0;
    right: 10px;

}
.content-left,.content-right {
	display: inline-block;
}
.content-right{
	position: absolute;
	right:0;
}
.content-left span{
	font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    color: #2CA532;
}
.content-right a{
	display: inline-block;
	font-size: 13px;
    font-weight: bold;
    width: auto;
    padding: 0 14px;
    position: relative;
    border-radius: 3px;
    line-height: 2;
}
.content-right .down{
	color: #fff;
    border: 1px solid #42bd56;
    background: #42bd56;
     
}
.content-right .open{
	margin-right: 0;
    margin-left: 8px;
    color: #42bd56;
    border: 1px solid #42bd56;
}
</style>