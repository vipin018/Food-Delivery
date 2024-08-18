import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmt, url } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div className="-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url + "/images/" + item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Card Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmt()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmt() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmt() === 0 ? 0 : getTotalCartAmt() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
                </div>
                <div className="card-promocode">
                    <div>
                        <p>If you have a promo code enter here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder="Enter promocode" />
                            <button>Submit  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart