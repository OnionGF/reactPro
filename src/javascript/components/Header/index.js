import React,{Component} from 'react'
import {Link}  from 'react-router'  



class Header extends Component{
//无状态组件
render(){

    
   
    return(
        <div  className="header">
            <div className="topp">
                <Link to="/index" className="one">
                     <i className="iconfont icon-left"></i>   
                </Link>
                <div className="two">
                       <h3>登录注册页</h3>
                </div>
                
              
            </div>
            <div className="check">
                <Link activeClassName='bg' to="/mine/login" className="left" >登录</Link>
                <Link activeClassName='bg' to="/mine/register" className="left" >注册</Link>
                {/* <a href="/" className="left">登录</a> */}
	
		    	{/* <a href="/" className="right">注册</a>
               */}
            </div>
        </div>


    )
}

}

export default Header