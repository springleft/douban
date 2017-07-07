<template>
	<div class="download">
		<div class="info">
			<img src="../assets/douban-app-logo.png" alt="">
			<div class="info-right">
				<strong>豆瓣</strong>
				<div>我们的精神部落</div>
		    </div>
		</div>
		<a href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1">免费下载Android客户端</a>
	</div>	
</template>
<script>
	export	default{
		name:'download'
	}
</script>
<style>
.download{
	padding: 0 0 20px 0;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 15px;
}
.info{
	margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    display: inline-block;
    color: #111;
}
.info img{
	width: 48px;
	float: left;
    margin-right: 12px;
}
.info-right{
	float: left;
}
.info-right strong{
	 font-size: 24px;
    font-weight: normal;
    line-height: 28px;
}
.info-right div{
	 white-space: pre;
    line-height: 20px;
}
a{
	    display: block;
	    color: #42bd56;
}	
</style>