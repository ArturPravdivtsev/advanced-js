export default class Cart {
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