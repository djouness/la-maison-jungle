import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import Checkout from './Checkout'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)
	const items = Object.keys(cart)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

	useEffect(() => {
		document.title = `LMJ : ${total}$ d'achats`
	}, [total])

	
    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
				<div className='lmj-cart-content'>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
					<button
						className='lmj-cart-checkout-button'
						onClick={() => Checkout()}
					>
						Commander
					</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart