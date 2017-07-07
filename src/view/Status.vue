<template>
	<div class="status">
		<Banner title="回复广播"></Banner>
		<div class="content-list">
      <Card mold="quote" v-for="item in items" :key="item"></Card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import Card from '@/components/Card'
	export default{
		name:'status',
		components:{Banner,Card},
		data(){
			return{
				items: new Array(10)
			}
		}
	}
</script>

<style scoped>
.status{
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;
	}	
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>