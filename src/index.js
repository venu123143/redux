import App from "./App";
import { createRoot } from "react-dom/client"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// productSlice.reducer imported as productReducer.
import productReducer, { productFetch } from "./redux-container/productsSlice"
import { producsApi } from "./redux-container/productsApi";
// cartSlice.reducer imported as cartReducer.
import cartReducer, { cartTotal } from "./redux-container/cartSlice"
import authReducer from "./redux-container/LoginSlice"
import SearchReducer from "./redux-container/SearchSlice";

const store = configureStore({
    reducer: {
        products:productReducer,
        cart:cartReducer,
        auth: authReducer,
        search:SearchReducer,
        [producsApi.reducerPath]:producsApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(producsApi.middleware)
    }
})
// this will dispatch our action creator.
store.dispatch(productFetch());
store.dispatch(cartTotal());

createRoot(document.getElementById("root")).render(
    <Provider store= {store}>
        <App/>
    </Provider>
)