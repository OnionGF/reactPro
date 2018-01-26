import React, { Component } from 'react';



class Restaurant extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
           data:{}
        }
    }
    componentWillMount(){
        alert('123')
    }
    render() {
    
    let {data} = this.state

    return (
        <div className='seller-list-item' key={data.id}>
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
    );
  }
}

export default Restaurant;
