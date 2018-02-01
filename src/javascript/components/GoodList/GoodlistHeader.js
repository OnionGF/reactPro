import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Icon, Grid } from 'antd-mobile';
import {Link}  from 'react-router'
class GoodList extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            
        }
    }
    componentWillMount(){
      
    }

    back () {
        browserHistory.push('/restaurant')
    }

    render() {
        let {seller} = this.props
        return (
            <div  className="seller-header" >
                {/* 主要内容：左侧头像、右侧描述 */}
                <div className='content-wrapper'>
                    <div className='avatar'>
                        <img src={'/static/img/good/good.webp'}/>
                    </div>
                    <div className='content'>
                        <div className="title">
                            <span className="brand"></span>
                            <span className="name">如意混沌(东湖国际店)</span>
                        </div>

                        <div className="description">
                            <span>蜂鸟转送/440</span>分钟送达
                        </div>

                            {/* 活动 */}
                        <div className="supports" >
                            <span className="icon decrease" ></span>
                            <span className="text">在线支付满28减5</span>
                        </div>
                            {/* 活动个数 */}
                        <div className="supports-count"  >
                            <span>5个活动</span>
                            <i className="icon-keyboard_arrow_right"></i>
                        </div>
                       
                    </div>

                    {/* 公告 */}
                    <div className="bulletin-wrapper">
                        <span className="brand"></span>
                        <span className="text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
                        <i className="icon-keyboard_arrow_right"></i>
                    </div>

                    {/* 背景 */}
                    <div className="background">
                        <img src={'/static/img/good/good.webp'}/>
                    </div>
                    
                </div>


                <div className="back" onClick={this.back}>
                    <Icon type="left" />
                </div>
            </div>
        );
  }
}

export default GoodList;
