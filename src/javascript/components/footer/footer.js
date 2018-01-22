
import React,{Component} from 'react';
import {Link} from 'react-router'
class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            navs:[
                {id:1,text:'首页',icon:'home',path:'/home'},
                {id:2,text:'消息',icon:'commenting-o',path:'/mes'},
                {id:3,text:'订单',icon:'clipboard',path:'/order'},
                {id:4,text:'我',icon:'user-o',path:'/mine'}
            ]
        }
    }
    render(){
        let {navs} = this.state
        let {pathname} = this.props
        return(
            <div className='footer'>
                {
                    navs.map((item)=>{
                        return <Link className={pathname===item.path?'active':''} key={item.id} to={item.path}>
                           <i className={`fa fa-${item.icon}`}></i>
                           <span>{item.text}</span>
                        </Link>
                    })
                }
            </div>
        )
    }
}

export default Footer