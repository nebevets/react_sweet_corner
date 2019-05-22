import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import thunk from './middleware/thunk';
import types from './actions/types';
import {verifyAuth, AUTH_TOKEN} from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

if(localStorage.getItem(AUTH_TOKEN)){
    store.dispatch({
        type: types.SIGN_IN
    });
    verifyAuth()(store.dispatch);
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
