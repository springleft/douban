<template>
	<div class="movie">
		<Scroller title="影院热映" type="hasCover" :items="hotMovies"></Scroller>
		<Scroller title="免费在线观影" type="hasCover" :items="topMovies" ></Scroller>
		<Scroller title="新片速递" type="hasCover" :items="newMovies"></Scroller>
		<Scroller title="发现好电影" type="onlyString" :items="movieTags"></Scroller>
		<Sort></Sort>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Sort from '@/components/Sort'
import Scroller from '@/components/Scroller'
	export default{
		name:'movie',
		data(){
			return{}
		},
		components:{Scroller,Sort},
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    // Dispatching getMovie
    getMovie: function () {
      this.$store.dispatch('getMovie')
    }
  },
  created () {
    // Getting movies data on created
    this.getMovie()
  }
	}
</script>

<style>
.movie{
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
   
	}


</style>