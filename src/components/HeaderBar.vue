<template>
		<div class="head" >
			<h1 class="title">
		      <router-link to="/">
		        豆瓣
		      </router-link>
    		</h1>
    		<nav>
				<ul>
					<li>
						<router-link style="color: #2384E8" to="/movie">电影</router-link>
					</li>
					<li>
						<router-link style="color: #9F7860" to="/book">图书</router-link>
					</li>
                    <li>
						<router-link style="color: #E4A813" to="/status">广播</router-link>
					</li>
					<li>
						<router-link style="color: #2AB8CC" to="/group">小组</router-link>
					</li>
				</ul>
				<span class="talion" @click="showTalion"></span>
			</nav>
			<Talion></Talion>
    	</div>

</template>

<script>
import $ from 'jquery'
import Talion from '@/view/Talion'
export	default{
	name:'head',
	components:{Talion},
	data(){
		return{

		}
	},
	methods:{
		showTalion(){
			
			$('.talion-view').show()
			
			
		}
	}
}	
</script>

<style scoped>
.head{
      position: fixed;
	  left: 0;
	  right: 0;
	  top: 0;
	  z-index: 998;
	  display: flex;
	  align-items: center;
	  height: 4.8rem;
	  padding: 0 1.8rem;
	  background: #fff;
	  border-bottom: 0.1rem solid #f3f3f3;
}
.head h1 a{
    margin: 0;
    padding: 0;
    color: #00b600;
    font-size: 0;
    background: url('../assets/head.png') no-repeat;
    background-size: cover;
    height: 22px;
    width: 46px;
	}
.head ul>li{
		font-size: 15px;
        margin-right: 19px;
        display: inline-block;
}
nav{
	overflow: hidden;
	position: absolute;
	right:15px;
	top:20px;
}
nav ul{float: left;}
nav span{
	font-size: 0;
    background: url("../assets/search.png") no-repeat;
    background-size: cover;
    width: 24px;
    height: 18px;
    margin-top: 4px;
    display: inline-block;
    position: relative;
}	
</style>