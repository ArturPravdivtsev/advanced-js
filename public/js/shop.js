class List {
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

class GoodItem {
    name = '';
    price = 0;
    CartInstance = null;

    constructor ({ name, price }, CartInstance) {
      this.name = name;
      this.price = price;
      this.CartInstance = CartInstance;
    }

    addToCart() {
        this.CartInstance.add(this);
    }
  
    render () {
      const placeToRender = document.querySelector('.goods-list');
      if (placeToRender) {
        const block = document.createElement('div');
        block.classList.add('good');
        block.innerHTML = `Товар: ${this.name} = ${this.price}`;
  
        const btn = new Button('Добавить в корзину', this.addToCart.bind(this));
        btn.render(block);
        placeToRender.appendChild(block);
      }
    }
}

class Cart {
    items = [];

    constructor() {

    }

    add(item) {
        this.items.push(item);
        this.render();
    }

    render() {
        const placeToRender = document.querySelector('.cart-list');
        if (placeToRender) {
            placeToRender.innerHTML = '';
            this.items.map((item) => {
                const block = document.createElement('div');
                block.innerHTML = `Товар: ${item.name} - ${item.price}`;
    
                placeToRender.appendChild(block);
            });
        }
    }
}

const CartInstance = new Cart();
const ListInstance = new List(CartInstance);