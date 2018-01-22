
import Footer from '../footer/footer.js'
import React,{Component} from 'react'
import {Link} from 'react-router'
class Mes extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {pathname} = this.props.location 
        return(
            <div>
                消息
                <Link to={'mine'}>回去</Link>
                <Footer/>
            </div>
        )
    }
}


export default Mes