

import React,{Component} from 'react'
import Footer from '../footer/footer.js'
import  Button  from './Button';
import store from '../../../redux/store.js'
import {connect} from 'react-redux'
import actions from '../../../redux/actions'
import reduceNum from '../../../redux/actionCreater/reduce_number'
import addNum from '../../../redux/actionCreater/add_number'
import random from '../../../redux/actionCreater/random'
class Order extends Component{
    constructor(props){
        super(props)
        this.state={         
        }
    }  
    render(){
        let {pathname} = this.props.location 
        return(
            <div>
                订单
                <Button handler={this.props.reduceNum}>-</Button>                
                <mark>{this.props.num}</mark>
                <Button handler={this.props.addNum}>+</Button>
                <Button handler={this.props.random}>随机数</Button>                
                <Footer/>
            </div>
        )
    }
}
Order.defaultProps = {
    a:1
}
let mapStateToProps = (state) => {
    return state
}
//创建一些方法，并将这些方法传递到UI组件的props上，这些方法都可以
//通过调用dispatch来调用store.dispatch

let  mapDispatchToProps = (dispatch) => {
    return {
        reduceNum(){
           //dispatcj == store.dispatch
           dispatch(reduceNum())
        },
        addNum(){
            //dispatcj == store.dispatch
            dispatch(addNum())
        },
        random(){
            //dispatcj == store.dispatch
            dispatch(random())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order)