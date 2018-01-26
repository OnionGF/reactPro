import React, { Component } from 'react';

import Footer from '../Footer/Footer.js'

class Home extends Component {
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
           <Footer/>

           订单
        </div>
    );
  }
}

export default Home;
