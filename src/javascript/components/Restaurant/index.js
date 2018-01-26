import React, { Component } from 'react';
import restaurantList from '../modules/restaurantList.js'
import { Icon } from 'antd-mobile';
import { browserHistory } from 'react-router';
import axios from 'axios'
class Home extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            restaurant:[]
        }
    }
    componentWillMount(){
        this._restaurantData ()
    }
    changeDetail(){
            // alert('123')
            browserHistory.push('/goodlist')
    }
    back(){
        browserHistory.push('/index')
    }
    render() {
        let {restaurant}  = this.state
    return (
        <div className='restaurant-list'>
           <div className='header-bar' >
                <Icon type="left"  onClick={this.back} className='left' />
                <h1>商家列表</h1>
           </div>
           {
                restaurant.map((data,i)=>{
                    return(
                        // <restaurantList data={data} key={i}/>
                        <div className='seller-list-item' onClick={this.changeDetail} key={i}>
                            <div className='left'>
                                <img src={data.pic_url}/>
                            </div>
                            <div className='right'>
                                <div className='name'>{data.name}</div>
                                <div className='mid clearfix'>
                                    <span className="count fl">月售{data.month_sale_num }</span>
                                    <span className="distance fr">{ data.distance }</span>
                                    <span className="time fr">{ data.avg_delivery_time }分钟</span>
                                </div>
                                <div className='fee'>
                                    <span className="start">{ data.min_price_tip }</span>
                                    <span className="deliver">{ data.shipping_fee_tip }</span>
                                    <span className="average">{data.average_price_tip }</span>
                                </div>
                                {
                                    data.discounts2.map((sup,i)=>{
                                        <div className='activity' key={i}>
                                            <p><img src={sup.icon_url} />{sup.info}</p>
                                        </div>
                                    })
                                }
                            </div>
                        
                        </div>
                    )
                })
                
            }
        </div>
    );
  }
  _restaurantData () {
    axios.get('/api/restaurantList').then(res => {
        console.log(res)
        if (res.data.code === 0) {
            this.setState(
            this.state.restaurant = res.data.data.data.poilist
          )
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export default Home;
