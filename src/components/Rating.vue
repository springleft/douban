<template>
  <div class="rating" v-if="rating">
    <template v-if="full === 0">
      <span>暂无评分</span>
    </template>
    <template v-else>
      <template v-for="n in full">
        <span class="star-full"></span>
      </template>
      <template v-for="n in half">
        <span class="star-half"></span>
      </template>
      <template v-for="n in gray">
        <span class="star-gray"></span>
      </template>
      <span class="average">{{rating.average}}</span>
    </template>
    <slot name="ratingsCount"></slot>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      full: 0,
      half: 0,
      gray: 0
    }
  },
  created () {
    let average = this.rating.average
    this.full = parseInt(average / 2)
    this.half = average % 2 === 0 ? 0 : 1
    this.gray = 5 - this.full - this.half
  }
}
</script>

<style  scoped>
.rating {
  margin-top: 0.4rem;
  font-size: 1.4rem;
  color: #aaa;
}

.star-full {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  background-image: url('../assets/full.png');
  background-size: 1.3rem 1.3rem;
}

.star-gray {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  background-image: url('../assets/gray.png');
  background-size: 1.3rem 1.3rem;
}

.star-half {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  background-image: url('../assets/half.png');
  background-size: 1.3rem 1.3rem;
}

.average {
  padding-right: 0.8rem;
}
</style>
