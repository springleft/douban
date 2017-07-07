<template>
  <div class="sort">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="item in items">
          <a :href="baseUri + item.href">
            {{item.title}}<span></span>
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  data () {
    return {
      baseUri: 'https://m.douban.com/',
      items: [
        {
          title: '小说',
          href: 'book/novel'
        },
        {
          title: '爱情',
          href: 'book/love'
        },
        {
          title: '历史',
          href: 'book/history'
        },
        {
          title: '外国文学',
          href: 'book/foreign'
        },
        {
          title: '青春',
          href: 'book/youth'
        },
        {
          title: '励志',
          href: 'book/motivation'
        },
        {
          title: '随笔',
          href: 'book/essay'
        },
        {
          title: '传记',
          href: 'book/bio'
        },
        {
          title: '推理',
          href: 'book/detective'
        },
        {
          title: '旅行',
          href: 'book/travel'
        },
        {
          title: '奇幻',
          href: 'book/fantasy'
        },
        {
          title: '经管',
          href: 'book/business'
        }
      ]
    }
  }
}
</script>

<style scoped>
.sort {
  margin-top: 1rem;

}
.sort h2 {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 1.6rem;
    display: inline-block;
    font-weight: normal;
  }
.type-list {
  margin: 1.6rem 0 0 1.6rem;
  overflow: hidden;
}
  li {
    float: left;
    box-sizing: border-box;
    width: 50%;
    padding-right: 1.8rem;
    height: 4.2rem;
    line-height: 4.2rem;
    font-size: 1.6rem;
    border-top: solid 0.1rem #eee;
    border-right: solid 0.1rem #eee;}

    a {
      color: #42bd56;
    }
  

  li:nth-child(2n) {
    padding-left: 1.8rem;
  }

  span {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 0.1rem #ccc;
    border-bottom: solid 0.1rem #ccc;
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
  }

</style>
