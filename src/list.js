import GoodItem from './goodItem.js'

export default class List {
    items = [];
  
    constructor (CartInstance) {
      this.fetchGoods()
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.preloading = false
          const goods = data.data.map(item => {
            return new GoodItem(item, CartInstance)
          })
          this.items = goods
          this.render();
        })
    }

    fetchGoods () {
      const url = '/data.json';
      return fetch(url);
    }
  
    render () {
      this.items.forEach(good => {
        good.render();
      });
    }
}