import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    //generate action creator and handle state for that perticual action creator.
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id); 
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} to cart`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.success(`${action.payload.name} removed from cart`, {
                position: 'bottom-left'
            })
        },
        descreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                state.cartItems = nextCartItems
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`your cart is cleared`, {
                position: 'bottom-left'
            })
        },
        cartTotal(state, action) {
            let { totalPrice, quantity } = state.cartItems.reduce((cartAmount, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const total = price * cartQuantity
                cartAmount.totalPrice += total;
                cartAmount.quantity += cartQuantity
                return cartAmount
            }, {
                totalPrice: 0,
                quantity: 0
            })
            state.cartTotalAmount = totalPrice;
            state.cartTotalQuantity = quantity;
        }
    }
})

// this is our action creator.
export const { addToCart, removeFromCart, descreaseCart, clearCart, cartTotal } = cartSlice.actions

export default cartSlice.reducer;