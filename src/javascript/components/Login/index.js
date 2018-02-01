import React, { Component } from 'react';
import Header from '../Header';

//import Footer from '../Footer/Footer.js'
import {Link}  from 'react-router'
class Home extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            
        }
    }
    componentWillMount(){
      
    }
    render() {

    return (
        <div>
        <Header />

        <form  className="form">
                <div className="box">
                    <div className="small">
                        <div className="little"></div>
                        <span>用户名</span>
                        <input type="text" placeholder="请输入用户名"/>
                    </div>
                    <div className="small">
                        <div className="little"></div>
                        <span>密码</span>
                        <input type="text" placeholder="请输入密码"/>
                    </div>
                    
                </div>
				
				<div>
                    <button className="btn1">登录</button>
                </div>
				
			</form>
        
 
           
        </div>
    );
  }
}

export default Home;
