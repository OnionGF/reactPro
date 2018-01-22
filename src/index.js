import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './stylesheets/index.scss';
import App from './javascript/App';
import registerServiceWorker from './registerServiceWorker'; //生产环境中的离线缓存
import Home from './javascript/components/index/Home.js'
import Mes from './javascript/components/mes/Mes.js'
import Order from './javascript/components/order/Order.js'
import Mine from './javascript/components/mine/Mine.js'
import {Router,Route,IndexRedirect,hashHistory,Redirect} from 'react-router'

import store from './redux/store.js'

import {Provider} from 'react-redux'

let route =<Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <IndexRedirect to="home"/>
                        <Route path="home" component={Home}/>
                        <Route path="mes" component={Mes}/>
                        <Route path="order" component={Order}/>
                        <Route path="mine" component={Mine}/>
                        <Redirect from="*" to="home"/>
                    </Route>
                </Router>
            </Provider>

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();


console.log(store.getState())