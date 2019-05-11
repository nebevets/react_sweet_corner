import { Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';
import Products from './products';
import React from 'react';
import '../assets/css/app.scss';

const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} />
            <Footer/>
        </div>
    </div>
);

export default App;
