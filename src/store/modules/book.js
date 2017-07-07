import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  novel: [],
  reality: [],
  travel: [],
  bookTags: [
    {
      title: '小波看书',
      href: 'https://m.douban.com/doulist/35573',
      color: '#42BD56'
    },
    {
      title: '树上春树周边',
      href: 'https://m.douban.com/doulist/38088147',
      color: '#2384E8'
    },
    {
      title: '我凭名字认定了你',
      href: 'https://m.douban.com/doulist/645579',
      color: '#2384E8'
    },
    {
      title: '不可饶恕的女人们',
      href: 'https://m.douban.com/doulist/192653',
      color: '#CC3344'
    },
    {
      line: true
    },
    {
      title: '爱欲书',
      href: 'https://m.douban.com/doulist/89925',
      color: '#FF4055'
    },
    {
      title: '他们还写侦探小说',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#FFAC2D'
    },
    {
      title: '人生识字始忧患',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#3BA94D'
    },
    {
      title: '诗歌书店',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#FFAC2D'
    }
  ]
}

const mutations = {
  getBook (state, payload) {
    switch (payload.tag) {
      case 'novel':
        state.novel = payload.res
        break
      case 'reality':
        state.reality = payload.res
        break
      case 'travel':
        state.travel = payload.res
        break
      default:
        state.novel = payload.res
    }
  }
}

const actions = {
  /**
   * Getting books
   * q: 虚构类, 非虚构类, 旅行
   * count: 8
   */
  getBook ({ commit }) {
    request
      .get('https://api.douban.com/v2/book/search?q=虚构类&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getBook',
            tag: 'novel',
            res: res.body.books
          })
        }
      })
    request
      .get('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getBook',
            tag: 'reality',
            res: res.body.books
          })
        }
      })
    request
      .get('https://api.douban.com/v2/book/search?q=旅行&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getBook',
            tag: 'travel',
            res: res.body.books
          })
        }
      })
  }
}

export default {
  state,
  mutations,
  actions
}
