import React, { Component } from 'react';

class Goods extends Component {
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
            {/* 左右联动 */}
            <div className="goods">
                {/* 左侧菜单 */}
                <div className='menu-wrapper'>
                
                </div>


                {/* 右侧食物列表 */}
                <div className='foods-wrapper'>
                
                </div>
            </div>

           Goods
        </div>
    );
  }
}

export default Goods;
