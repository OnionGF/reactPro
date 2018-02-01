import React, { Component } from 'react';

import Footer from '../Footer/Footer.js'

import {Link} from "react-router"
class Mine extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentWillMount(){
      
    }
    render() {

    return (
       
 
         <div className="mine"> 
            <div className="top">
                    <div className="info">
                       <div className="avatar-wrapper">
                            <img src="/static/lazyload.jpeg"/>
                        </div>

                        <div className="name-wrapper">
                            <Link to="/mine/register" className="name">登录</Link>
                            <span className="desc">个人信息 <i className="iconfont icon-right"></i></span>
                        </div>
                    </div>

                    <div className="operation">
                        <i className="iconfont icon-huanfu"></i>
                        <i className="iconfont icon-youjian"></i>
                        <i className="iconfont icon-shezhi"></i>
                    </div>
            </div>

            <div className="one"></div>
            <div className="important">

                <i className="iconfont icon-shoucang">
                    <span className="desc">我的收藏 </span>
                </i>
                <i className="iconfont icon-zuji">
                    <span className="desc">我的足迹 </span>
                </i>
                <i className="iconfont icon-dizhi">
                    <span className="desc">收货地址 </span>
                </i>
                <i className="iconfont icon-yue">
                    <span className="desc">余额 </span>
                </i>
                
                
            </div>

            
            <div className="two"></div>
            
            <div className="minor">
                <i className="iconfont icon-guanyu">
                    <span className="desc">关于 </span>
                </i>
               
                
            </div>







        </div>
    )
  }
}

export default Mine;
