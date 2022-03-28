import React from "react";
import ProductList from "./ProductList";
import { contextExample } from "../context/contextExample";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: null,
            error: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/carts/5")
            .then(res => {
                if(!res.ok) throw Error("Could not fetch data");
                return res.json();
            })
            .then(data => {
                data.products.forEach(product => {
                    fetch("https://fakestoreapi.com/products/" + product.productId)
                        .then(res => {
                            if(!res.ok) throw Error("Could not fetch data");
                            return res.json();
                        })
                        .then(data => this.setState({
                            products: [...this.state.products, data]
                        }))
                        .catch(e=> console.log(e))

                    this.setState({
                        isLoading: false
                    })                    
                });
            })
            .catch(e => {
                this.setState({
                    error: e.message,
                    isLoading: false
                })
            })
    }

    componentWillUnmount() {
        
    }

    render() {
        let context = this.context;
        return (
            <div className="cart">
                <h5>{context}</h5>
                <h2>Your Cart</h2>
                {this.state.error && <p>{this.state.error}</p>}
                {this.state.isLoading && <p>Getting your product...</p>}
                {this.state.products && <ProductList products = {this.state.products}/>}
            </div>
        );
    }
}
Cart.contextType = contextExample;
export default Cart;