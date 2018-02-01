import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './stylesheets/index.scss';
import App from './javascript/App';
import registerServiceWorker from './registerServiceWorker'; //生产环境中的离线缓存
import Home from './javascript/components/index'
import Find from './javascript/components/Find'
import Mine from './javascript/components/Mine'
import Order from './javascript/components/Order'
import Login from './javascript/components/Login'
import Restaurant from './javascript/components/Restaurant'
import GoodList from './javascript/components/GoodList'
import Goods from './javascript/components/GoodList/Goods.js'
import Retings from './javascript/components/GoodList/Retings.js'
import Seller from './javascript/components/GoodList/Seller.js'

import {Router,Route,IndexRedirect,hashHistory,Redirect,browserHistory} from 'react-router'

import store from './redux/store.js'

import {Provider} from 'react-redux'

import 'antd-mobile/dist/antd-mobile.css';
// const history = createBrowserHistory();
let route =<Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        {/* <IndexRedirect to="/index"/> */}
                        <Route path="/index" component={Home}/>
                        <Route path="/find" component={Find}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/mine" component={Mine}/>
                        {/* <Redirect from="*" to="/index"/> */}
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='/restaurant' component={Restaurant}/>
                    <Route path='/goodlist' component={GoodList}>
                        <Route path="/goods"   component={Goods}/>
                        <Route path="/retings" component={Retings}/>
                        <Route path="/seller"  component={Seller}/>
                    </Route>
                </Router>
            </Provider>

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();


