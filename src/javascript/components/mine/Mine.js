

import React,{Component} from 'react'
import Footer from '../footer/footer.js'
import axios from 'axios'
import Button from '../order/Button.js'
import {Link} from 'react-router'

import {connect} from 'react-redux'
import multiply from '../../../redux/actionCreater/multiply'

class Mine extends Component{
    constructor(props){
        super(props)
        console.log(this)
        this.state={
            good:[]
        }
    }
    componentWillMount(){
        axios.get("/static/json/data.json").then(({data})=>{
            this.setState({good:data})
            console.log(this.state.good)
        })
    }
    // addNum(){
    //     alert('加入购物车')
    // }
    render(){
        let {pathname} = this.props.location 
        let {good} = this.state
        return(
            <div>
                {this.props.num}
                {
                   good.map(item=>(
                        <p key={item.id}>
                            <span>{item.id}</span>
                            <i>{item.text}</i>
                            <i>{item.price}</i>
                            <Button handler={this.props.multiply}>加入购物车
                            </Button>
                          
                            {/* <link to={mes}>回到购物车</link> */}
                        </p>    
                    ))
                }
                  <Link to={'mes'}>回去</Link>
                <Footer/>
            </div>
        )
    }
}
//将 redux。 store中的state传递到ui组件到的props上
let mapStateToProps = (state) => {
    return state
}
//创建一些方法，并将这些方法传递到UI组件的props上，这些方法都可以
//通过调用dispatch来调用store.dispatch

let  mapDispatchToProps = (dispatch) => {
    return {
       multiply(){
           //dispatcj == store.dispatch
           dispatch(multiply())
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mine)