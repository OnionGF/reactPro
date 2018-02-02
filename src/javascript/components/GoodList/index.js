import React, { Component } from 'react';
import axios from 'axios'
import GoodlistHeader from './GoodlistHeader'
import {Link}  from 'react-router'
class GoodList extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            seller:{
               
            }
            
        }
    }
    componentWillMount(){
      
    }
    render() {
        let {data} = this.state
        return (
            <div>
                <div id='app'>
                    <div className='restaurant-detail'>
                        <GoodlistHeader  />
                        <div className='tab'>
                            <div className="tab-item">
                                <Link to="/goods" activeClassName="active">点菜</Link>
                            </div>
                            <div className="tab-item">
                                <Link to="/retings" activeClassName="active">评价</Link>
                            </div>
                            <div className="tab-item">
                                <Link to="/seller" activeClassName="active">商家</Link>
                            </div>
                        </div>

                        {this.props.children}
                        <div className=''></div>
                    </div>
                </div>        
            </div>
        );
    }
    getDate(){
       
    }
    componentWillMount(){
        this.getDate()
    }
}

export default GoodList;
