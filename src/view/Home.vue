<template>
	<div class="home">
		<div class="page">
			<ul>
				<li>
					<a href="javascript:;">影院热映</a>
				</li>
				<li>
					<a href="javascript:;">近期值得看得国产剧</a>
				</li>
				<li>
					<a href="javascript:;">豆瓣时间</a>
				</li>
				<li>
					<a href="javascript:;">使用豆瓣APP</a>
				</li>
			</ul>
            
		</div>
		<list mold="thumbnail" :items="events"></list>
         <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
     		<Loading ></Loading>	
     	</infinite-loading>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import List from '@/components/List'
import InfiniteLoading from 'vue-infinite-loading'
	export default{
		name:'home',
		components:{Loading,List,InfiniteLoading},
		data(){
			return{}
		},
		computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
	
       
   }
</script>

<style scoped>
	.home{
		    padding-top: 47px;
		    max-width: 650px;
		    background: #fff;
		    margin: 0 auto;
		    
	}
	.page{
		margin:0 18px;
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