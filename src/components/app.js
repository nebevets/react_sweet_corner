import '../assets/css/app.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Products from './products';
import ProductDetails from './products/product_details';
import Services from './services';
import About from './about';
import Contact from './contact';
import Cart from './cart';
import Account from './account';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Footer from './footer';

const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/account" component={Account} />
            <Footer/>
        </div>
    </div>
);

export default App;
