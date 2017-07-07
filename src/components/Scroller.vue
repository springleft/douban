<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="javascript:;">更多</a>
    </div>
    <div class="content">
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items">
          <router-link :to="'subject/' + item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Rating from './Rating'
	export default{
		name:'scroller',
		props:['title','type','items'],
		components:{Rating},
		data(){
			return{
				
			}
		}

	}
</script>
<style scoped>
.scroller{
	padding-top: 1rem;
 
}
.header{
	    padding: 0 1.6rem;
}
.header h2{
	display: inline-block;
    min-width: 4em;
    margin-bottom: 0;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 1.68rem;
    font-weight: normal;
}
.header a{
	  float: right;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #42bd56;
}
.content{
	    margin-bottom: -1.12rem;
}
.hasCover {
	    white-space: nowrap;
      overflow-x: auto;
      padding: 15px 0 43px 0;
}
.hasCover li{
  	  display: inline-block;
      vertical-align: top;
      width: 100px;
      text-align: center;
      display: inline-block;
      margin-left: 10px;
}
.hasCover img{
	height: 150px;
}
.title {
    display: block;
    max-width: 100%;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .onlyString ul{
  	white-space: nowrap;
    overflow-x: auto;
    padding: 15px 15px 43px 15px;
    font-size: 0;
    margin-left: -5px;
  }
  .onlyString {
  overflow-x: auto;
  white-space: nowrap;
    padding: 15px 15px 43px 15px;
    font-size: 0;
    margin-left: -5px;
}

 .onlyString li {
    display: inline-block;
    margin: 0 0 0.8rem 1.6rem;
    font-size: 1.6rem;
    border: solid 0.1rem;
    border-radius: 0.4rem;
    vertical-align: middle;
  }

  .onlyString a {
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: 0.16rem;
    overflow: auto;
    display: block;
    text-align: center;
  }

  .onlyString li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
  }
</style>