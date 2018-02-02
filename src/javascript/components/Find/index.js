import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Footer from '../Footer/Footer.js'
import axios from 'axios'
class Find extends Component {
    constructor(context,props){
        super(context,props)
        this.state={
            find:[]
        }
    }
    componentWillMount(){
     this._findData()
    }
    render() {
        let {find} = this.state

    return (
        
    <div className="find">     

        {
               find.map((data,i)=>(


        <div className="whole" key={i}> 

            <div className="bigbox" >
                
                <dl>
                     <dt>
                         <img src={data.img} alt=""/>
                     </dt>
                     <dd className="ddd">{data.title}</dd>
                     <div className="life">
                            周边生活
                     </div>
                     <div className="num">
                         {data.view}
                     </div>
                </dl>
                
            </div>

        </div>
       
               
               ))          
        }   
         </div>    
    )
  }
    _findData (){
        axios.get('/api/findList').then(res=>{
            console.log(res)
            if(res.data.code === 0){
                this.setState(
                this.state.find = res.data.data.data
                )
            }
        }).catch(err =>{
            console.log(err)
        })
        console.log()
        }
   

}

export default Find;
