import { Component } from "react"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Title from "./components/Title"

class App extends Component {
	state = {
		products: [
			{ name: "Tomato", price: 1500, img: "/products/tomate.jpg" },
			{ name: "Beens", price: 2500, img: "/products/arbejas.jpg" },
			{ name: "Letuce", price: 500, img: "/products/lechuga.jpg" },
		],
		cart: [],
		visibleCart: false,
	}

	addToCart = (product) => {
		const { cart } = this.state
		if (cart.find((x) => x.name === product.name)) {
			const newCart = cart.map((element) =>
				element.name === product.name
					? {
							...element,
							quantity: element.quantity + 1,
					  }
					: element
			)
			return this.setState({ cart: newCart })
		}
		return this.setState({
			cart: this.state.cart.concat({ ...product, quantity: 1 }),
		})
	}

	showCart = () => {
		if (!this.state.cart.length) {
			return
		}
		this.setState({ visibleCart: !this.state.visibleCart })
	}

	render() {
		const { visibleCart } = this.state
		return (
			<div>
				<Navbar visibleCart={visibleCart} showCart={this.showCart} cart={this.state.cart} />
				<Layout>
					<Title />
					<Products addToCart={this.addToCart} products={this.state.products} />
				</Layout>
			</div>
		)
	}
}

export default App
