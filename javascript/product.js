import { get, Data } from "./jsonbin.js";

class product extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        let data1 = `
        <article class="product">
            <div class = "back">
            <img src=${values.img} alt="">
            </div>
            <h5 class="name">${values.name}</h5>
            <h5 class="cost">${values.cost}</h5>
          </article>`;
          this.innerHTML = data1;
    }
    connectedCallback() {
        this.querySelector("button").addEventListener("click", () => {
            const myCart = document.querySelector("gobi-shoppingcart");
            myCart.AddToCart(this);
            myCart.color = "#0f0";
            // MyApp.SetState("lastColor", "#0f0");
            // MyApp.AddProductToShoppingCart(this);
            // alert(MyApp.GetState("lastColor"));
        })
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('product', bakeryProduct);