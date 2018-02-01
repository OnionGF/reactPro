import React, { Component } from 'react';

import Footer from '../Footer/Footer.js'

class Find extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            
        }
    }
    componentWillMount(){
      
    }
    render() {

    return (
        <div className="whole">
            <div className="bigbox">
                
                <dl>
                     <dt>
                         <img src="https://p1.meituan.net/gpa/c5f5a4ea35d8a6ab77815efb94fc0722100193.jpg%40720w_348h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" alt=""/>
                     </dt>
                     <dd className="ddd">太子妃吹出好莱坞效果！明星扎堆的影视城</dd>
                     <div className="life">
                            周边生活
                     </div>
                     <div className="num">
                         11111人看过
                     </div>
                </dl>
                
            </div>

        
        </div>
    )
  }
}

export default Find;
