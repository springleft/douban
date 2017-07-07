<template>
	<div class="group">
	   <section class="box">
	   	  <a href="javascript:;">
	   	  	<img src="https://img3.doubanio.com/img/files/file-1497948661.png" alt="">
	   	  </a>
	   	   <a href="javascript:;">
	   	  	<img src="https://img3.doubanio.com/img/files/file-1497611033.jpg" alt="">
	   	  </a>
	   	  <a href="javascript:;">
	   	  	<img src="https://img3.doubanio.com/img/files/file-1497511794.png" alt="">
	   	  </a>
	   	  <a href="javascript:;">
	   	  	<img src="https://img3.doubanio.com/img/files/file-1497325276.jpg" alt="">
	   	  </a>
	   	  <a href="javascript:;">
	   	  	<img src="https://img3.doubanio.com/img/files/file-1496636045.jpg" alt="">
	   	  </a>
	   </section>
	   <section class="page">
	   	    <ul>
	   	    	<li>
	   	    		<a href="javascript:;">小组最新话题</a>
	   	    	</li>
	   	    	<li>
	   	    		<a href="javascript:;">我发表的话题</a>
	   	    	</li>
	   	    	<li>
	   	    		<a href="javascript:;">我回应的话题</a>
	   	    	</li>
	   	    	<li>
	   	    		<a href="javascript:;">最近浏览</a>
	   	    	</li>
	   	    </ul>
	   </section>
	  <grouplist title="租房找室友" :items="group_a">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </grouplist>
    <grouplist title="来聊五块钱" :items="group_b">
      <a class="list-link" href="#" slot="more">来聊五块钱</a>
    </grouplist>
    <grouplist title="买买买" :items="group_c">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </grouplist>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Grouplist from '@/components/Grouplist'
	export default{
		name:'group',
		components:{Grouplist},
		data(){
			return{

			}
		},
		computed: {
    // Getting Vuex State from store/modules/group
    ...mapState({
      group_a: state => state.group.group_a,
      group_b: state => state.group.group_b,
      group_c: state => state.group.group_c
    })
  },
  created: function () {
    // Dispatching getGroup on created
    this.$store.dispatch('getGroup')
  }

	}
</script>

<style scoped>
.group{
		    padding-top: 47px;
		    max-width: 650px;
		    background: #fff;
		    margin: 0 auto;
		  
	}	
.box{
	    word-break: keep-all;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 30px;
}
.box a{
	    width: 190px;
	    height: 80px;
	    display: inline-block;
        margin-right: 10px;
}
.box a img{
	    width: 190px;
    height: 80px;
    display: inline-block;
}

	.page ul{
		    overflow: hidden;
		    margin: 20px 0 0 0;
		    padding-top: 6px;
	}
	.page ul>li{
		float: left;
	    width: 50%;
	    padding: 3px;
	    box-sizing: border-box;
	    font-size: 15px;
	}
	.page ul>li a{
		background-color: #f6f6f6;
	    color: #494949;
	    display: block;
	    text-align: center;
	    line-height: 20px;
	    padding: 12px 0;
	    border-radius: 2px;
	    max-width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
</style>