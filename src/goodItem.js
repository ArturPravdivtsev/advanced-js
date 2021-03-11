import Button from './button'

export default class GoodItem {
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