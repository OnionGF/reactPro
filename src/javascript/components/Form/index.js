import React from 'react'



class Form extends React.Component {
	
	constructor(props){
		super(props)
		
	}
	
	
	render(){
		return (
			
			<form  className="form">
                <div className="box">
                    <div className="small">
                        <div className="little"></div>
                        <span>用户名</span>
                        <input type="text" placeholder="请输入用户名"/>
                    </div>
                    <div className="small">
                        <div className="little"></div>
                        <span>邮箱</span>
                        <input type="text" placeholder="请输入邮箱"/>
                    </div>
                    <div className="small">
                        <div className="little"></div>
                        <span>密码</span>
                        <input type="password" placeholder="请输入密码"/>
                    </div>
                    <div className="small">
                        <div className="little"></div>
                        <span>确认密码</span>
                        <input type="password" placeholder="请确认密码"/>
                    </div>
                </div>
				
				<div>
                    <button className="btn1">注册</button>
                </div>
				
			</form>
			
		)
	}
	
}

export default Form