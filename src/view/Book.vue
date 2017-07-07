<template>
	<div class="book">
		<Scroller title="最受关注图书 | 虚拟类" type="hasCover" :items="novel" ></Scroller>
		<Scroller title="最受关注图书 | 非虚拟类" type="hasCover" :items="reality"></Scroller>
		<Scroller title="豆瓣纸书" type="hasCover" :items="travel">
      
    </Scroller>
    <Scroller title="发现好图书" type="onlyString" :items="bookTags"></Scroller>
		<BookSort></BookSort>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import BookSort from '@/components/BookSort'
import Scroller from '@/components/Scroller'
	export default{
		name:'book',
		components:{Scroller,BookSort},
		computed: {
    // Getting Vuex State from store/modules/book
    ...mapState({
      novel: state => state.book.novel,
      reality: state => state.book.reality,
      travel: state => state.book.travel,
      bookTags: state => state.book.bookTags
    })
  },
  methods: {
    // Dispatching getBook
    getBook: function () {
      this.$store.dispatch('getBook')
    }
  },
  created: function created () {
    // Getting books data on created
    this.getBook()
  }
	}
</script>

<style>
.book{
		    padding-top: 47px;
		    max-width: 650px;
		    background: #fff;
		    margin: 0 auto;
		    
	}	
</style>