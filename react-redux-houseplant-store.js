// File structure
src/
  components/
    Header.js
    LandingPage.js
    ProductListing.js
    ShoppingCart.js
  redux/
    store.js
    cartSlice.js
  App.js
  index.js

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/products" component={ProductListing} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItemsCount = useSelector(state => state.cart.totalItems);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span>{cartItemsCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Company Name</h1>
      <p>Paragraph about the company</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;

// components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  // Add 6 unique plants with categories, names, prices, and thumbnails
];

function ProductListing() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      {/* Group plants by category and render them */}
    </div>
  );
}

export default ProductListing;

// components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/cartSlice';

function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Implement cart functionality here

  return (
    <div className="shopping-cart">
      {/* Render cart items and controls */}
    </div>
  );
}

export default ShoppingCart;

// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // Implement add to cart logic
    },
    incrementItem: (state, action) => {
      // Implement increment item logic
    },
    decrementItem: (state, action) => {
      // Implement decrement item logic
    },
    removeItem: (state, action) => {
      // Implement remove item logic
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
