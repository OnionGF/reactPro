import React, { Component } from 'react';
import { Carousel } from 'antd';

class Banner extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
           
        }
      
    }

    render() {
    let {data} = this.props
    return (
        <div>           
            <Carousel autoplay dots={true}>
                 {
                    data?data.map(item=>(
                        <div key={item.id}>
                            <img alt='' src={item.url}/>
                        </div>
                    )):''
                }
            </Carousel>
        </div>
    );
  }
}

export default Banner;
