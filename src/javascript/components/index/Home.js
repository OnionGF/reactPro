import React, { Component } from 'react';
import axios from 'axios'
import Footer from '../footer/footer.js'
import Banner from './Banner.js'
class Home extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            data:[]
        }
    }
    componentWillMount(){
		let that = this
		axios.get('/static/json/picture.json')
            .then(function ({data}) {
              console.log(data+1111)
            that.setState({data:data.billboards}) 
        })
	}
    render() {
    let {pathname} = this.props.location 
    let {data} = this.state
    return (
        <div>
            <Banner data={data}/>
            首页
            <Footer pathname={pathname}/>
        </div>
    );
  }
}

export default Home;
