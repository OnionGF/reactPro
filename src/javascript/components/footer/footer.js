
import { NavBar, Icon,Badge } from 'antd-mobile';
import React,{Component} from 'react';
import {Link} from 'react-router' 


class Header extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
     
    }
    componentWillMount(){

    }
    render(){
      
        return(
            <div>
                <ul className="tab-bar">   
                    <li>              
                        <Link className="ico-index"  activeClassName="indexClick" to="index">                       
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="ico-find" activeClassName="findClick" to="find">
                            <span>发现</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="ico-order" activeClassName="orderClick"  to="/order">                     
                        <span>订单</span>
                        </Link>
                    </li>                    
                    <li>
                        <Link className="ico-mine" activeClassName="mineClick" to="/mine">
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
            </div>  
        )

    }  
   
}



export default Header