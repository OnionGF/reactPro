import React, { Component } from 'react';


import {Link}  from 'react-router'
class GoodList extends Component {
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
            <div id='app'>
                <div className='restaurant-detail'>
                    <div className='seller-header'>
                        <div className='content-wrapper'>
                            
                        </div>
                    </div>
                    <div className='tab'></div>
                    <div className=''></div>
                </div>
            </div>
           商品列表
        </div>
    );
  }
}

export default GoodList;
