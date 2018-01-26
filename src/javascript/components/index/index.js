import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Footer from '../Footer/Footer.js'
import axios from 'axios'
import {Link} from 'react-router'
import restaurantList from '../modules/restaurantList.js'
class Home extends Component {
    constructor(context,props){
        super(context,props)

        this.state={
            indexList:[],
            types: [
                {
                  ico: '/static/img/index/types/types (7).png',
                  txt: '美食'
                },
                {
                  ico: '/static/img/index/types/types (0).png',
                  txt: '美团超市'
                },
                {
                  ico: '/static/img/index/types/types (1).png',
                  txt: '生鲜果蔬'
                },
                {
                  ico: '/static/img/index/types/types (5).png',
                  txt: '甜点饮品'
                },
                {
                  ico:'/static/img/index/types/types (4).png',
                  txt: '正餐优选'
                },
                {
                  ico: '/static/img/index/types/types (2).png',
                  txt: '美团专送'
                },
                {
                  ico: '/static/img/index/types/types (3).png',
                  txt: '能量西餐'
                },
                {
                  ico: '/static/img/index/types/types (6).png',
                  txt: '精品小吃'
                }
              ]
        }
    }
    componentWillMount(){
        this._initIndexListData();
    }
   
    render() {
        let {types} = this.state
        let {indexList}=this.state
        let {sups} = this.state
        return (
            <div className='contentBody'>
                <div><img style={{"width":"100%"}} src='/static/img/index/swipe/banner.jpg' alt=''/></div>    
                    {/* 轮播图 */}
                <div className='swiper'>
                    {
                        types.map((type,i)=>{
                            // console.log(types)
                            return (
                                <Link key={i} to='/restaurant'>
                                    <img style={{"width":"50px"}} src={type.ico}/>
                                    <p>{type.txt}</p>
                                </Link>
                            )     
                        })
                    }
                </div>
                {/* 空格 */}
                <div className='wrap'></div>
                {/* 商品详情页 */}

                <div className='detail'>
                    <div className='titleBar'><span>附近商家</span></div>
                    {
                        indexList.map((data,i)=>{
                            return(
                                // <restaurantList data={data} key={i}/>
                                <div className='seller-list-item' key={i}>
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
            </div>
        )
  }
//   changeDetail(){
//     // alert('123')
//      browserHistory.push('#/restaurant')
//   }
  _initIndexListData () {
    axios.get('/api/indexList').then(res => {
        // console.log(res)
        if (res.data.code === 0) {
            this.setState(
            this.state.indexList = res.data.data.data.poilist
          )
      }
    }).catch(err => {
    //   console.log(err)
    })
  }
}

export default Home;
